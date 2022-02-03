export const strReplaceWith = (str: string, limit: number, replace: string): string => 
{   
    if (str.length > limit) {
        return str.substring(0, limit) + replace;
    }

    return str;
}