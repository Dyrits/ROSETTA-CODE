/* function getFinalOpenedDoors(numDoors) {
 return Array.from({ length: numDoors }).reduce((doors, _, index) => {
 const isOpened = Array.from({ length: 100 }).reduce((status, _, $index) => {
 if (!((index + 1) % ($index + 1))) {
 status = !status;
 }
 return status;
 }, false);
 isOpened && doors.push(index + 1);
 return doors;
 }, []);
 }
 */

function getFinalOpenedDoors(quantity) {
  return Array.from({ length: Math.sqrt(quantity) }).map((_, index) => (index + 1)  ** 2, []);
}

console.log(getFinalOpenedDoors(100));