javascript超级

#Basic Types

#### Boolean
```
let isDone: boolean = false;
```

#### Number
```
let isDone: number = 6;
```

#### String
```
let color: string = "blue";
color = 'red'
```
#### Array
```
let list: number[] = [1,3,3];

let list: Array<number> = [1,2,3]

```
#### Tuple
```
let x: [String,number]
x=['hello',10]
```

#### Enum
```
enum Color {Red = 1, Green = 2, Blue =4}
let c: Color = Color.Green

```

#### Any
```
let notSure: any =4;
notSure = "mayBe a string instead"
notSure = false
```

#### void 
```
function warnUser(): void{
    console.log("This is my waining message")
}

let u:undefined = undefined;
let n:null = null
```
#### never????

```
// Function  returning never must have unreachbale end point
function error(message: string): never{
    throw new Error(message)
}

// Interred return type is never;
function fail(){
    return error('Something faild')
}
```

#### Object 
```
declare function create(o: object | null): void;
 
create({prop:0)})
```


Type assertions


#Variable Declaratons

```
function f(shouldInitialize: booleam) {
    if(shouldInitialize){
        var x = 10;
    }
    return x;
}

f(true);
f(false)
```
