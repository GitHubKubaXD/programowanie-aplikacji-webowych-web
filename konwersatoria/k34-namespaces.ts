// namespace to starszy sposób enkapsulacji kodu, aktualnie najczęściej wykorzystujemy moduły! 
namespace Architecture {
    export function getArea(width: number, height: number) {
        return width*height;
    }
    // namespace in namespace
    export namespace Metric {
        export const inchInCm = 2.54;
    }

}
const amount = 10 * Architecture.Metric.inchInCm;
const area = Architecture.getArea(10,20);