// 30/01/2025
// Yasmin Alves

function areOccurrencesEqual(s: string): boolean {
    const map = new Map<string, number>();
    for (let c of s) {
        map.set(c, (map.get(c) || 0) + 1)
    }
    return new Set(new Set(map.values())).size === 1;
};