"""
Напишите функцию, складывающую два двоичных числа.

Формат ввода:
Два числа в двоичной системе счисления, каждое на отдельной строке.
Длина каждого числа не превосходит 10 000 символов.

Формат вывода:
Одно число в двоичной системе счисления.
"""


import sys


def main():
    """Считывает из ввода два двоичных числа, выводит их сумму."""
    a: str = sys.stdin.readline().rstrip()
    b: str = sys.stdin.readline().rstrip()

    if len(a) < len(b):
        a = '0' * (len(b) - len(a)) + a
    if len(b) < len(a):
        b = '0' * (len(a) - len(b)) + b

    output_string: str = ''
    tail: int = 0

    for i in range(-1, -len(a) - 1, -1):
        cur: int = int(a[i]) + int(b[i]) + tail
        output_string += str(cur % 2)
        tail = cur // 2
        if i == -len(a) and tail != 0:
            output_string += str(tail)

    print(output_string[::-1])
