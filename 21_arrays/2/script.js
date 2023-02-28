let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
styles[Math.trunc(styles.length / 2)] = "Классика";

alert(styles.shift());

styles.unshift("Рэп", "Регги");