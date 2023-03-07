"""Напишите функцию, переводящую целое число из десятичной системы."""


def decimal_conversion(number: int, base: int) -> str:
    """Переводит целое десятичное число в систему исчисления с базой base."""
    output_str: str = ''
    while number >= base:
        output_str += str(number % base)
        number = number // base
    output_str += str(number % base)
    return(output_str[::-1])
