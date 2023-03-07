"""
Задача по поиску "соседей" в матрице.

Соседним считается элемент, находящийся от текущего на одну
ячейку влево, вправо, вверх или вниз.

Ввод:
В первой строке задано n — количество строк матрицы. Во второй — количество
столбцов m. Числа m и n не превосходят 1000. В следующих n строках задана
матрица. Элементы матрицы — целые числа, по модулю не превосходящие 1000.
В последних двух строках записаны координаты элемента, соседей которого
нужно найти. Индексация начинается с нуля.
"""


import sys


def main():
    """Читает ввод, выводит всех соседей заданного элемента."""
    matrix = []
    n, m = int(input()), int(input())
    for i in range(n):
        matrix.append(list(map(int, sys.stdin.readline().rstrip().split())))
    y, x = int(input()), int(input())

    neighbours = []
    if y + 1 < n:
        neighbours.append(matrix[y + 1][x])
    if y > 0:
        neighbours.append(matrix[y - 1][x])
    if x + 1 < m:
        neighbours.append(matrix[y][x + 1])
    if x > 0:
        neighbours.append(matrix[y][x - 1])
    neighbours.sort()
    print(str(neighbours).translate({ord(i): None for i in "'[](),"}))


if __name__ == '__main__':
    main()
