const a = [4, 8, 6, 2, 1];

function asce(a) {
  for (let i = 0; i < a.length; i++) {
    const v1 = a[i];

    for (let j = 0; j < a.length; j++) {
      const v2 = a[j];

      if (v1 < v2) {
        const sv = a[i];
        a[j] = sv;
        a[i] = v2;
      }
    }
  }

  return a;
}

function desc(a) {
  for (let i = 0; i < a.length; i++) {
    const v1 = a[i];

    for (let j = 0; j < a.length; j++) {
      const v2 = a[j];

      if (v1 > v2) {
        const sv = a[i];
        a[j] = sv;
        a[i] = v2;
      }
    }
  }

  return a;
}
