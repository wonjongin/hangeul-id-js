export function convert_base_from_dec(num: number, to: number): Array<number> {
  let mid_int: number = num;
  let i = 1;
  while (true) {
    let d = Math.pow(to, i);
    if (num / d < 1) {
      break;
    } else {
      i = i + 1;
    }
  }
  let max_digit = i;
  let res = [];
  for (let j = max_digit - 1; j > 0; j--) {
    let p = Math.pow(to, j);
    let a = Math.floor(mid_int / p);
    mid_int = mid_int - a * p;
    res.push(a);
  }
  res.push(mid_int);
  return res;
}

export function convert_base_to_dec(num: Array<number>, from: number): number {
  let res: number = 0;
  num.map((e, i, a) => {
    res += e * Math.pow(from, a.length - 1 - i);
  });
  return res;
}

export function convert_base(
  num: Array<number>,
  from: number,
  to: number
): Array<number> {
  let mid = convert_base_to_dec(num, from);
  let res = convert_base_from_dec(mid, to);
  return res;
}
