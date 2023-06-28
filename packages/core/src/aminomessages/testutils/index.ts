import { sortedJsonStringify } from "@cosmjs/amino/build/signdoc";
import { AminoConverters } from "@cosmjs/stargate";

/**
 * Contains the data of a single converter test.
 */
export interface ConverterTestData<T> {
  readonly name: string;
  readonly typeUrl: string;
  readonly msg: T;
  readonly expectedJsonSerialized: string;
  readonly testToProtobuf?: boolean;
}

/**
 * Runs the conversion test for the given {@param data}, using the provided {@param converters}.
 */
export function runConverterTest(
  converters: AminoConverters,
  data: ConverterTestData<any>
) {
  return async () => {
    const converter = converters[data.typeUrl];
    if (!converter) {
      fail(`Cannot find converter for msg with type url ${data.typeUrl}`);
    }

    // Check toAmino conversion
    const aminoConverted = converter.toAmino(data.msg);
    expect(sortedJsonStringify(aminoConverted)).toBe(
      data.expectedJsonSerialized
    );

    if (data.testToProtobuf === true) {
      const backToProtobuf = converter.fromAmino(aminoConverted);
      expect(backToProtobuf).toEqual(data.msg);
    }
  };
}
