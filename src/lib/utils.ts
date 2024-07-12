import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { genSaltSync, hashSync, compareSync } from 'bcrypt-ts';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const wait = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

const salt = genSaltSync(10);
export const hasher = {
  hash: (plainText: string) => hashSync(plainText, salt),
  compare: (plainText: string, hashed: string) => compareSync(plainText, hashed),
};
