namespace StirngUtil {
   export function toUpper(str: string): string {
        return str.toUpperCase();
    }

   export function toLower(str: string): string {
        return str.toLowerCase();
    }

   export function subString(str: string, strFrom: number = 0, strTo: number = 0): string {
        return str.substr(strFrom, strTo);
    }
}