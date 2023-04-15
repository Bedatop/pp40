let mas = [0, 1, 2, 3]; 

JSON.stringify(mas);
console.log(typeof(json));

localStorage.setItem('mas', mas)
console.log(localStorage.getItem('mas'));

let user = {
    name: 'bvbv',
    age: 0
};
JSON.stringify(user);
JSON.parse(user);

let ob = '["Коля", "Вася", "Петя"]';
ase = JSON.parse(ob);
alert(ase[2]);

let aaa = {a: 'aaa', b: 'bbb'};
JSON.stringify(aaa, ["a", "b"])