#include <stdio.h>

int main(void)
{
    double x, y;

    printf("Введіть x: ");
    scanf("%lf", &x);

    if (x <= -41) {
        y = 13.0 * x * x / 11.0 - 6;
        printf("y = %.4f\n", y);
    }
    else if ((x > -21 && x <= 3) || x > 12) {
        y = -14 * x - 20;
        printf("y = %.4f\n", y);
    }
    else {
        printf("Функція не існує для x = %.4f\n", x);
    }

    return 0;
}