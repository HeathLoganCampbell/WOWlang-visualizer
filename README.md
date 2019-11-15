# WOWlang-visualizer

## Rules
### Increment value
```
WOW
```

#### Example
```
WOW
```
*Registers*
```
1 0 0 0
^
```

### Decrement value
```
wow
```
#### Example
```
WOW WOW WOW wow
```
*Registers*
```
2 0 0 0
^
```

### Move register pointer Right
```
woW
```
#### Example
```
woW WOW
```
*Registers*
```
0 1 0 0
  ^
```

### Move register pointer Left
```
Wow
```
#### Example
```
woW WOW Wow WOW WOW
```
*Registers*
```
2 1 0 0
^
```

### Reset register
```
w0w
```
#### Example
```
WOW WOW WOW WOW WOW W0W
```
*Registers*
```
0 0 0 0
^
```

### Loop / if statement
Loop will run till current value = 0
```
WOw <Statements> wOW
```
#### Example
```
WOW WOW WOw wow wOW
```
*Registers*
```
0 0 0 0
^
```

### Input
```
wOw
```
#### Example
```
wOw
```
*Registers*
```
<value Of input> 0 0 0
^
```

### Output
WIP

### Jump
Adds current registers value to the register position
```
woow
```
#### Example
```
WOW WOW WOW woow WOW
```
*Registers*
```
4 0 0 0 0 1
^
```
