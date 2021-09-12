export function isValidString(input: string): boolean {
    const result: boolean = !(input.startsWith(" ") || input.match(/[a-z]/gi)!.toString().length < 3);
    console.log(result);
    return result;
}
