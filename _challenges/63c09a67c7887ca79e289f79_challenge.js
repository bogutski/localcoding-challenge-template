// NAMEEN:
// NAMERU:Какая комната больше?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию ``compareRooms, которая принимает два объекта.

В каждом объекте хранится информация о комнате.

В каждом объекте есть два свойства: `width` и `height`. Эти свойства хранят ширину и длину комнаты.

Например, объект `{width: 10, height: 20}` означает комнату шириной 10 футов и длиной 20 футов.

Функция должна вернуть строку, которая означает, какая комната по площади больше.

* Если первая комната больше, функция должна вернуть строку `Room 1 is bigger`.
* Если вторая комната больше, функция должна вернуть строку `Room 2 is bigger`.
* Если комнаты одинаковы по площади, функция должна вернуть строку `Rooms are equal`.

Пример запуска функции:
```javascript
compareRooms({width: 10, height: 20}, {width: 5, height: 10}) // Room 1 is bigger
compareRooms({width: 10, height: 20}, {width: 20, height: 10}) // Room 2 is bigger
compareRooms({width: 10, height: 20}, {width: 10, height: 20}) // Rooms are equal
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function compareRooms(room1, room2) {
  if (room1.width * room1.height > room2.width * room2.height) {
    return 'Room 1 is bigger';
  } else if (room1.width * room1.height < room2.width * room2.height) {
    return 'Room 2 is bigger';
  } else {
    return 'Rooms are equal';
  }
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function compareRooms', () => {
  expect(compareRooms).to.be.a('function');
});

it('compareRooms({width: 10, height: 20}, {width: 5, height: 10}) should return Room 1 is bigger', () => {
  expect(compareRooms({ width: 10, height: 20 }, { width: 5, height: 10 })).to.equal(
    'Room 1 is bigger',
  );
});

it('compareRooms({width: 10, height: 20}, {width: 20, height: 10}) should return Rooms are equal', () => {
  expect(compareRooms({ width: 10, height: 20 }, { width: 20, height: 10 })).to.equal(
    'Rooms are equal',
  );
});

it('compareRooms({width: 10, height: 20}, {width: 10, height: 20}) should return Rooms are equal', () => {
  expect(compareRooms({ width: 10, height: 20 }, { width: 10, height: 20 })).to.equal(
    'Rooms are equal',
  );
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
