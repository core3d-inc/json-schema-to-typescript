import {readFileSync} from 'fs'
import {JSONSchema4} from 'json-schema'
import {Options as $RefOptions} from '@apidevtools/json-schema-ref-parser'
import {cloneDeep, endsWith, merge} from 'lodash'
import {dirname} from 'path'
import {Options as PrettierOptions} from 'prettier'
import {format} from './formatter'
import {generate} from './generator'
import {normalize} from './normalizer'
import {optimize} from './optimizer'
import {parse} from './parser'
import {dereference} from './resolver'
import {error, stripExtension, Try, log} from './utils'
import {validate} from './validator'
import {isDeepStrictEqual} from 'util'
import {link} from './linker'
import {validateOptions} from './optionValidator'

export {EnumJSONSchema, JSONSchema, NamedEnumJSONSchema, CustomTypeJSONSchema} from './types/JSONSchema'

export interface Options {
  /**
   * [$RefParser](https://github.com/BigstickCarpet/json-schema-ref-parser) Options, used when resolving `$ref`s
   */
  $refOptions: $RefOptions
  /**
   * Default value for additionalProperties, when it is not explicitly set.
   */
  additionalProperties: boolean
  /**
   * Disclaimer comment prepended to the top of each generated file.
   */
  bannerComment: string
  /**
   * Root directory for resolving [`$ref`](https://tools.ietf.org/id/draft-pbryan-zyp-json-ref-03.html)s.
   */
  cwd: string
  /**
   * Declare external schemas referenced via `$ref`?
   */
  declareExternallyReferenced: boolean
  /**
   * Prepend enums with [`const`](https://www.typescriptlang.org/docs/handbook/enums.html#computed-and-constant-members)?
   */
  enableConstEnums: boolean
  /**
   * Format code? Set this to `false` to improve performance.
   */
  format: boolean
  /**
   * Ignore maxItems and minItems for `array` types, preventing tuples being generated.
   */
  ignoreMinAndMaxItems: boolean
  /**
   * Maximum number of unioned tuples to emit when representing bounded-size array types,
   * before falling back to emitting unbounded arrays. Increase this to improve precision
   * of emitted types, decrease it to improve performance, or set it to `-1` to ignore
   * `minItems` and `maxItems`.
   */
  maxItems: number
  /**
   * Append all index signatures with `| undefined` so that they are strictly typed.
   *
   * This is required to be compatible with `strictNullChecks`.
   */
  strictIndexSignatures: boolean
  /**
   * A [Prettier](https://prettier.io/docs/en/options.html) configuration.
   */
  style: PrettierOptions
  /**
   * Generate code for `definitions` that aren't referenced by the schema?
   */
  unreachableDefinitions: boolean
  /**
   * Generate unknown type instead of any
   */
  unknownAny: boolean
}

export const DEFAULT_OPTIONS: Options = {
  $refOptions: {},
  additionalProperties: true, // TODO: default to empty schema (as per spec) instead
  bannerComment: `/* tslint:disable */
/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/`,
  cwd: process.cwd(),
  declareExternallyReferenced: true,
  enableConstEnums: true,
  format: true,
  ignoreMinAndMaxItems: false,
  maxItems: 20,
  strictIndexSignatures: false,
  style: {
    bracketSpacing: false,
    printWidth: 120,
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: 'none',
    useTabs: false
  },
  unreachableDefinitions: false,
  unknownAny: true
}

export function compileFromFile(filename: string, options: Partial<Options> = DEFAULT_OPTIONS): Promise<string> {
  const contents = Try(
    () => readFileSync(filename),
    () => {
      throw new ReferenceError(`Unable to read file "${filename}"`)
    }
  )
  const schema = Try<JSONSchema4>(
    () => JSON.parse(contents.toString()),
    () => {
      throw new TypeError(`Error parsing JSON in file "${filename}"`)
    }
  )
  return compile(schema, stripExtension(filename), {cwd: dirname(filename), ...options})
}

export async function compile(schema: JSONSchema4, name: string, options: Partial<Options> = {}): Promise<string> {
  validateOptions(options)

  const _options = merge({}, DEFAULT_OPTIONS, options)

  const start = Date.now()
  function time() {
    return `(${Date.now() - start}ms)`
  }

  // normalize options
  if (!endsWith(_options.cwd, '/')) {
    _options.cwd += '/'
  }

  // Initial clone to avoid mutating the input
  const _schema = cloneDeep(schema)

  const {dereferencedPaths, dereferencedSchema} = await dereference(_schema, _options)
  if (process.env.VERBOSE) {
    if (isDeepStrictEqual(_schema, dereferencedSchema)) {
      log('green', 'dereferencer', time(), '✅ No change')
    } else {
      log('green', 'dereferencer', time(), '✅ Result:', dereferencedSchema)
    }
  }

  const linked = link(dereferencedSchema)
  if (process.env.VERBOSE) {
    log('green', 'linker', time(), '✅ No change')
  }

  const errors = validate(linked, name)
  if (errors.length) {
    errors.forEach(_ => error(_))
    throw new ValidationError()
  }
  if (process.env.VERBOSE) {
    log('green', 'validator', time(), '✅ No change')
  }

  const normalized = normalize(linked, dereferencedPaths, name, _options)
  log('yellow', 'normalizer', time(), '✅ Result:', normalized)

  const parsed = parse(normalized, _options)
  log('blue', 'parser', time(), '✅ Result:', parsed)

  const optimized = optimize(parsed, _options)
  log('cyan', 'optimizer', time(), '✅ Result:', optimized)

  const generated = generate(optimized, _options)
  log('magenta', 'generator', time(), '✅ Result:', generated)

  const formatted = format(generated, _options)
  log('white', 'formatter', time(), '✅ Result:', formatted)

  return formatted
}

export class ValidationError extends Error {}
