#include <stdio.h>

/* Спосіб 1: лише операції порівняння, без &&, ||, ! */
void sposib1(double x)
{
    double y;

    if (x <= -41) {
        y = 13.0 * x * x / 11.0 - 6;
        printf("Спосіб 1: y = %.4f\n", y);
    }
    else if (x <= -21) {              /* x in (-41; -21] */
        printf("Спосіб 1: функція не існує для x = %.4f\n", x);
    }
    else if (x <= 3) {                /* x in (-21; 3] */
        y = -14 * x - 20;
        printf("Спосіб 1: y = %.4f\n", y);
    }
    else if (x <= 12) {               /* x in (3; 12] */
        printf("Спосіб 1: функція не існує для x = %.4f\n", x);
    }
    else {                            /* x > 12 */
        y = -14 * x - 20;
        printf("Спосіб 1: y = %.4f\n", y);
    }
}

/* Спосіб 2: з логічними операціями */
void sposib2(double x)
{
    double y;

    if (x <= -41) {
        y = 13.0 * x * x / 11.0 - 6;
        printf("Спосіб 2: y = %.4f\n", y);
    }
    else if ((x > -21 && x <= 3) || x > 12) {
        y = -14 * x - 20;
        printf("Спосіб 2: y = %.4f\n", y);
    }
    else {
        printf("Спосіб 2: функція не існує для x = %.4f\n", x);
    }
}

int main(void)
{
    double x;

    printf("Введіть x: ");
    scanf("%lf", &x);

    sposib1(x);
    sposib2(x);

    return 0;
}
