// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    cats.push(name)
}

function  destructivelyPrependCat(name)
{
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name)
{
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name)
{
    cats.shift(name)
}
function appendCat(name)
{   const AddCats=[...cats]
    AddCats.push(name)
    return AddCats;

}

function prependCat(name)
{   const AddCats=[name, ...cats]
    
    return AddCats;

}

function removeLastCat()
{
   const RemoveCat = [...cats];
   RemoveCat.pop();
   return RemoveCat;


}

function  removeFirstCat()
{
   const RemoveCat = [...cats];
   RemoveCat.shift();
   return RemoveCat;


}