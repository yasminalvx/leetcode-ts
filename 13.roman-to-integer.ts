// 30/01/2025
// Yasmin Alves

function romanToInt(s: string): number {
    let sum = 0;
    const romanValues = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        const value = romanValues.get(c) || 0;
        const nextValue = romanValues.get(s[i + 1]) || 0;
        if (value < nextValue && nextValue !== 0) {
            sum -= value;
            continue;
        }
        sum += value;
    }
    
    return sum;
};

