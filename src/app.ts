import { Twisty } from "twisty"
import { SiGNMove, getAlgURLParam, Sequence, algToString, parse as algparse} from "alg"
import { KPuzzle, KPuzzleDefinition, parse } from "kpuzzle"

var twisty:Twisty ;
var puzzle:KPuzzleDefinition ;
var algoinput:HTMLInputElement ;
var lastalgo:string = "" ;
var svg1 = `
<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<g style="fill: yellow;" id="Stickers-l57-o0">
<polygon stroke="black" points="100 400 150 400 150 450"/>
</g>
<g style="fill: violet;" id="Stickers-l58-o0">
<polygon stroke="black" points="0 300 50 300 50 350"/>
</g>
<g style="fill: blue;" id="Stickers-l59-o0">
<polygon stroke="black" points="100 100 150 100 150 50"/>
</g>
<g style="fill: orange;" id="Stickers-l56-o0">
<polygon stroke="black" points="100 400 150 450 100 450"/>
<polygon stroke="black" points="100 100 150 50 100 50"/>
<polygon stroke="black" points="0 300 50 350 0 350"/>
</g>
<g style="fill: green;" id="Stickers-l54-o0">
<polygon stroke="black" points="100 300 150 300 150 350"/>
</g>
<g style="fill: yellow;" id="Stickers-l53-o0">
<polygon stroke="black" points="100 400 150 400 150 350"/>
</g>
<g style="fill: violet;" id="Stickers-l55-o0">
<polygon stroke="black" points="100 300 50 300 50 350"/>
</g>
<g style="fill: orange;" id="Stickers-l52-o0">
<polygon stroke="black" points="100 300 150 350 100 350"/>
<polygon stroke="black" points="100 400 150 350 100 350"/>
<polygon stroke="black" points="100 300 50 350 100 350"/>
</g>
<g style="fill: white;" id="Stickers-l41-o0">
<polygon stroke="black" points="100 200 150 200 150 150"/>
</g>
<g style="fill: violet;" id="Stickers-l43-o0">
<polygon stroke="black" points="0 300 50 300 50 250"/>
</g>
<g style="fill: blue;" id="Stickers-l42-o0">
<polygon stroke="black" points="100 100 150 100 150 150"/>
</g>
<g style="fill: orange;" id="Stickers-l40-o0">
<polygon stroke="black" points="100 200 150 150 100 150"/>
<polygon stroke="black" points="100 100 150 150 100 150"/>
<polygon stroke="black" points="0 300 50 250 0 250"/>
</g>
<g style="fill: white;" id="Stickers-l37-o0">
<polygon stroke="black" points="100 200 150 200 150 250"/>
</g>
<g style="fill: green;" id="Stickers-l39-o0">
<polygon stroke="black" points="100 300 150 300 150 250"/>
</g>
<g style="fill: violet;" id="Stickers-l38-o0">
<polygon stroke="black" points="100 300 50 300 50 250"/>
</g>
<g style="fill: orange;" id="Stickers-l36-o0">
<polygon stroke="black" points="100 200 150 250 100 250"/>
<polygon stroke="black" points="100 300 150 250 100 250"/>
<polygon stroke="black" points="100 300 50 250 100 250"/>
</g>
<g style="fill: purple;" id="Stickers-l63-o0">
</g>
<g style="fill: blue;" id="Stickers-l62-o0">
<polygon stroke="black" points="200 100 150 100 150 50"/>
</g>
<g style="fill: orange;" id="Stickers-l60-o0">
<polygon stroke="black" points="200 400 150 450 200 450"/>
<polygon stroke="black" points="200 100 150 50 200 50"/>
</g>
<g style="fill: yellow;" id="Stickers-l61-o0">
<polygon stroke="black" points="200 400 150 400 150 450"/>
</g>
<g style="fill: yellow;" id="Stickers-l49-o0">
<polygon stroke="black" points="200 400 150 400 150 350"/>
</g>
<g style="fill: green;" id="Stickers-l51-o0">
<polygon stroke="black" points="200 300 150 300 150 350"/>
</g>
<g style="fill: orange;" id="Stickers-l48-o0">
<polygon stroke="black" points="200 300 150 350 200 350"/>
<polygon stroke="black" points="200 400 150 350 200 350"/>
</g>
<g style="fill: purple;" id="Stickers-l50-o0">
</g>
<g style="fill: white;" id="Stickers-l45-o0">
<polygon stroke="black" points="200 200 150 200 150 150"/>
</g>
<g style="fill: orange;" id="Stickers-l44-o0">
<polygon stroke="black" points="200 200 150 150 200 150"/>
<polygon stroke="black" points="200 100 150 150 200 150"/>
</g>
<g style="fill: blue;" id="Stickers-l47-o0">
<polygon stroke="black" points="200 100 150 100 150 150"/>
</g>
<g style="fill: purple;" id="Stickers-l46-o0">
</g>
<g style="fill: purple;" id="Stickers-l35-o0">
</g>
<g style="fill: orange;" id="Stickers-l32-o0">
<polygon stroke="black" points="200 200 150 250 200 250"/>
<polygon stroke="black" points="200 300 150 250 200 250"/>
</g>
<g style="fill: green;" id="Stickers-l34-o0">
<polygon stroke="black" points="200 300 150 300 150 250"/>
</g>
<g style="fill: white;" id="Stickers-l33-o0">
<polygon stroke="black" points="200 200 150 200 150 250"/>
</g>
<g style="fill: yellow;" id="Stickers-l25-o0">
<polygon stroke="black" points="200 400 250 400 250 450"/>
</g>
<g style="fill: red;" id="Stickers-l24-o0">
<polygon stroke="black" points="200 400 250 450 200 450"/>
<polygon stroke="black" points="200 100 250 50 200 50"/>
</g>
<g style="fill: purple;" id="Stickers-l26-o0">
</g>
<g style="fill: blue;" id="Stickers-l27-o0">
<polygon stroke="black" points="200 100 250 100 250 50"/>
</g>
<g style="fill: red;" id="Stickers-l20-o0">
<polygon stroke="black" points="200 300 250 350 200 350"/>
<polygon stroke="black" points="200 400 250 350 200 350"/>
</g>
<g style="fill: purple;" id="Stickers-l23-o0">
</g>
<g style="fill: yellow;" id="Stickers-l21-o0">
<polygon stroke="black" points="200 400 250 400 250 350"/>
</g>
<g style="fill: green;" id="Stickers-l22-o0">
<polygon stroke="black" points="200 300 250 300 250 350"/>
</g>
<g style="fill: blue;" id="Stickers-l10-o0">
<polygon stroke="black" points="200 100 250 100 250 150"/>
</g>
<g style="fill: purple;" id="Stickers-l11-o0">
</g>
<g style="fill: red;" id="Stickers-l8-o0">
<polygon stroke="black" points="200 200 250 150 200 150"/>
<polygon stroke="black" points="200 100 250 150 200 150"/>
</g>
<g style="fill: white;" id="Stickers-l9-o0">
<polygon stroke="black" points="200 200 250 200 250 150"/>
</g>
<g style="fill: red;" id="Stickers-l4-o0">
<polygon stroke="black" points="200 200 250 250 200 250"/>
<polygon stroke="black" points="200 300 250 250 200 250"/>
</g>
<g style="fill: purple;" id="Stickers-l6-o0">
</g>
<g style="fill: green;" id="Stickers-l7-o0">
<polygon stroke="black" points="200 300 250 300 250 250"/>
</g>
<g style="fill: white;" id="Stickers-l5-o0">
<polygon stroke="black" points="200 200 250 200 250 250"/>
</g>
<g style="fill: yellow;" id="Stickers-l29-o0">
<polygon stroke="black" points="300 400 250 400 250 450"/>
</g>
<g style="fill: blue;" id="Stickers-l30-o0">
<polygon stroke="black" points="300 100 250 100 250 50"/>
</g>
<g style="fill: violet;" id="Stickers-l31-o0">
<polygon stroke="black" points="400 300 350 300 350 350"/>
</g>
<g style="fill: red;" id="Stickers-l28-o0">
<polygon stroke="black" points="400 300 350 350 400 350"/>
<polygon stroke="black" points="300 400 250 450 300 450"/>
<polygon stroke="black" points="300 100 250 50 300 50"/>
</g>
<g style="fill: red;" id="Stickers-l16-o0">
<polygon stroke="black" points="300 300 250 350 300 350"/>
<polygon stroke="black" points="300 300 350 350 300 350"/>
<polygon stroke="black" points="300 400 250 350 300 350"/>
</g>
<g style="fill: violet;" id="Stickers-l18-o0">
<polygon stroke="black" points="300 300 350 300 350 350"/>
</g>
<g style="fill: green;" id="Stickers-l19-o0">
<polygon stroke="black" points="300 300 250 300 250 350"/>
</g>
<g style="fill: yellow;" id="Stickers-l17-o0">
<polygon stroke="black" points="300 400 250 400 250 350"/>
</g>
<g style="fill: white;" id="Stickers-l13-o0">
<polygon stroke="black" points="300 200 250 200 250 150"/>
</g>
<g style="fill: red;" id="Stickers-l12-o0">
<polygon stroke="black" points="300 200 250 150 300 150"/>
<polygon stroke="black" points="400 300 350 250 400 250"/>
<polygon stroke="black" points="300 100 250 150 300 150"/>
</g>
<g style="fill: violet;" id="Stickers-l14-o0">
<polygon stroke="black" points="400 300 350 300 350 250"/>
</g>
<g style="fill: blue;" id="Stickers-l15-o0">
<polygon stroke="black" points="300 100 250 100 250 150"/>
</g>
<g style="fill: red;" id="Stickers-l0-o0">
<polygon stroke="black" points="300 200 250 250 300 250"/>
<polygon stroke="black" points="300 300 250 250 300 250"/>
<polygon stroke="black" points="300 300 350 250 300 250"/>
</g>
<g style="fill: violet;" id="Stickers-l3-o0">
<polygon stroke="black" points="300 300 350 300 350 250"/>
</g>
<g style="fill: green;" id="Stickers-l2-o0">
<polygon stroke="black" points="300 300 250 300 250 250"/>
</g>
<g style="fill: white;" id="Stickers-l1-o0">
<polygon stroke="black" points="300 200 250 200 250 250"/>
</g>
</svg>
` ;
var svg2 = `
<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<g style="fill: blue;" id="Stickers-l59-o0">
<polygon stroke="black" points="206.698729810778 387.5 250 312.5 206.698729810778 337.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l57-o0">
<polygon stroke="black" points="293.301270189222 387.5 206.698729810778 387.5 250 412.5"/>
</g>
<g style="fill: orange;" id="Stickers-l56-o0">
<polygon stroke="black" points="293.301270189222 387.5 206.698729810778 387.5 250 362.5"/>
<polygon stroke="black" points="206.698729810778 387.5 250 312.5 250 362.5"/>
<polygon stroke="black" points="250 312.5 293.301270189222 387.5 250 362.5"/>
</g>
<g style="fill: violet;" id="Stickers-l58-o0">
<polygon stroke="black" points="250 312.5 293.301270189222 387.5 293.301270189222 337.5"/>
</g>
<g style="fill: orange;" id="Stickers-l52-o0">
<polygon stroke="black" points="206.698729810778 212.5 163.397459621556 137.5 163.397459621556 187.5"/>
<polygon stroke="black" points="293.301270189222 387.5 293.301270189222 437.5 336.602540378444 412.5"/>
<polygon stroke="black" points="336.602540378444 362.5 293.301270189222 387.5 336.602540378444 412.5"/>
</g>
<g style="fill: violet;" id="Stickers-l55-o0">
<polygon stroke="black" points="336.602540378444 362.5 293.301270189222 387.5 293.301270189222 337.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l53-o0">
<polygon stroke="black" points="293.301270189222 387.5 293.301270189222 437.5 250 412.5"/>
</g>
<g style="fill: green;" id="Stickers-l54-o0">
<polygon stroke="black" points="206.698729810778 212.5 163.397459621556 137.5 206.698729810778 162.5"/>
</g>
<g style="fill: blue;" id="Stickers-l42-o0">
<polygon stroke="black" points="206.698729810778 287.5 250 312.5 206.698729810778 337.5"/>
</g>
<g style="fill: violet;" id="Stickers-l43-o0">
<polygon stroke="black" points="250 312.5 293.301270189222 287.5 293.301270189222 337.5"/>
</g>
<g style="fill: orange;" id="Stickers-l40-o0">
<polygon stroke="black" points="206.698729810778 62.5 293.301270189222 62.5 250 37.5"/>
<polygon stroke="black" points="206.698729810778 287.5 250 312.5 250 262.5"/>
<polygon stroke="black" points="250 312.5 293.301270189222 287.5 250 262.5"/>
</g>
<g style="fill: white;" id="Stickers-l41-o0">
<polygon stroke="black" points="206.698729810778 62.5 293.301270189222 62.5 250 87.5"/>
</g>
<g style="fill: green;" id="Stickers-l39-o0">
<polygon stroke="black" points="206.698729810778 112.5 163.397459621556 137.5 206.698729810778 162.5"/>
</g>
<g style="fill: orange;" id="Stickers-l36-o0">
<polygon stroke="black" points="206.698729810778 62.5 206.698729810778 112.5 163.397459621556 87.5"/>
<polygon stroke="black" points="206.698729810778 112.5 163.397459621556 137.5 163.397459621556 87.5"/>
<polygon stroke="black" points="336.602540378444 362.5 293.301270189222 287.5 336.602540378444 312.5"/>
</g>
<g style="fill: violet;" id="Stickers-l38-o0">
<polygon stroke="black" points="336.602540378444 362.5 293.301270189222 287.5 293.301270189222 337.5"/>
</g>
<g style="fill: white;" id="Stickers-l37-o0">
<polygon stroke="black" points="206.698729810778 62.5 206.698729810778 112.5 250 87.5"/>
</g>
<g style="fill: orange;" id="Stickers-l60-o0">
<polygon stroke="black" points="336.602540378444 137.5 293.301270189222 212.5 336.602540378444 187.5"/>
<polygon stroke="black" points="206.698729810778 437.5 206.698729810778 387.5 163.397459621556 412.5"/>
<polygon stroke="black" points="206.698729810778 387.5 163.397459621556 362.5 163.397459621556 412.5"/>
</g>
<g style="fill: blue;" id="Stickers-l62-o0">
<polygon stroke="black" points="206.698729810778 387.5 163.397459621556 362.5 206.698729810778 337.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l61-o0">
<polygon stroke="black" points="206.698729810778 437.5 206.698729810778 387.5 250 412.5"/>
</g>
<g style="fill: purple;" id="Stickers-l63-o0">
<polygon stroke="black" points="336.602540378444 137.5 293.301270189222 212.5 293.301270189222 162.5"/>
</g>
<g style="fill: orange;" id="Stickers-l48-o0">
<polygon stroke="black" points="206.698729810778 212.5 250 187.5 250 237.5"/>
<polygon stroke="black" points="250 187.5 293.301270189222 212.5 250 237.5"/>
<polygon stroke="black" points="206.698729810778 437.5 293.301270189222 437.5 250 462.5"/>
</g>
<g style="fill: green;" id="Stickers-l51-o0">
<polygon stroke="black" points="206.698729810778 212.5 250 187.5 206.698729810778 162.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l49-o0">
<polygon stroke="black" points="206.698729810778 437.5 293.301270189222 437.5 250 412.5"/>
</g>
<g style="fill: purple;" id="Stickers-l50-o0">
<polygon stroke="black" points="250 187.5 293.301270189222 212.5 293.301270189222 162.5"/>
</g>
<g style="fill: purple;" id="Stickers-l46-o0">
<polygon stroke="black" points="336.602540378444 137.5 293.301270189222 112.5 293.301270189222 162.5"/>
</g>
<g style="fill: blue;" id="Stickers-l47-o0">
<polygon stroke="black" points="206.698729810778 287.5 163.397459621556 362.5 206.698729810778 337.5"/>
</g>
<g style="fill: orange;" id="Stickers-l44-o0">
<polygon stroke="black" points="293.301270189222 112.5 293.301270189222 62.5 336.602540378444 87.5"/>
<polygon stroke="black" points="336.602540378444 137.5 293.301270189222 112.5 336.602540378444 87.5"/>
<polygon stroke="black" points="206.698729810778 287.5 163.397459621556 362.5 163.397459621556 312.5"/>
</g>
<g style="fill: white;" id="Stickers-l45-o0">
<polygon stroke="black" points="293.301270189222 112.5 293.301270189222 62.5 250 87.5"/>
</g>
<g style="fill: purple;" id="Stickers-l35-o0">
<polygon stroke="black" points="250 187.5 293.301270189222 112.5 293.301270189222 162.5"/>
</g>
<g style="fill: green;" id="Stickers-l34-o0">
<polygon stroke="black" points="206.698729810778 112.5 250 187.5 206.698729810778 162.5"/>
</g>
<g style="fill: orange;" id="Stickers-l32-o0">
<polygon stroke="black" points="293.301270189222 112.5 206.698729810778 112.5 250 137.5"/>
<polygon stroke="black" points="206.698729810778 112.5 250 187.5 250 137.5"/>
<polygon stroke="black" points="250 187.5 293.301270189222 112.5 250 137.5"/>
</g>
<g style="fill: white;" id="Stickers-l33-o0">
<polygon stroke="black" points="293.301270189222 112.5 206.698729810778 112.5 250 87.5"/>
</g>
<g style="fill: blue;" id="Stickers-l27-o0">
<polygon stroke="black" points="456.698729810778 387.5 500 312.5 456.698729810778 337.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l25-o0">
<polygon stroke="black" points="543.301270189222 387.5 456.698729810778 387.5 500 412.5"/>
</g>
<g style="fill: purple;" id="Stickers-l26-o0">
<polygon stroke="black" points="500 312.5 543.301270189222 387.5 543.301270189222 337.5"/>
</g>
<g style="fill: red;" id="Stickers-l24-o0">
<polygon stroke="black" points="543.301270189222 387.5 456.698729810778 387.5 500 362.5"/>
<polygon stroke="black" points="456.698729810778 387.5 500 312.5 500 362.5"/>
<polygon stroke="black" points="500 312.5 543.301270189222 387.5 500 362.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l21-o0">
<polygon stroke="black" points="543.301270189222 387.5 543.301270189222 437.5 500 412.5"/>
</g>
<g style="fill: purple;" id="Stickers-l23-o0">
<polygon stroke="black" points="586.602540378444 362.5 543.301270189222 387.5 543.301270189222 337.5"/>
</g>
<g style="fill: red;" id="Stickers-l20-o0">
<polygon stroke="black" points="456.698729810778 212.5 413.397459621556 137.5 413.397459621556 187.5"/>
<polygon stroke="black" points="543.301270189222 387.5 543.301270189222 437.5 586.602540378444 412.5"/>
<polygon stroke="black" points="586.602540378444 362.5 543.301270189222 387.5 586.602540378444 412.5"/>
</g>
<g style="fill: green;" id="Stickers-l22-o0">
<polygon stroke="black" points="456.698729810778 212.5 413.397459621556 137.5 456.698729810778 162.5"/>
</g>
<g style="fill: blue;" id="Stickers-l10-o0">
<polygon stroke="black" points="456.698729810778 287.5 500 312.5 456.698729810778 337.5"/>
</g>
<g style="fill: purple;" id="Stickers-l11-o0">
<polygon stroke="black" points="500 312.5 543.301270189222 287.5 543.301270189222 337.5"/>
</g>
<g style="fill: red;" id="Stickers-l8-o0">
<polygon stroke="black" points="456.698729810778 62.5 543.301270189222 62.5 500 37.5"/>
<polygon stroke="black" points="456.698729810778 287.5 500 312.5 500 262.5"/>
<polygon stroke="black" points="500 312.5 543.301270189222 287.5 500 262.5"/>
</g>
<g style="fill: white;" id="Stickers-l9-o0">
<polygon stroke="black" points="456.698729810778 62.5 543.301270189222 62.5 500 87.5"/>
</g>
<g style="fill: white;" id="Stickers-l5-o0">
<polygon stroke="black" points="456.698729810778 62.5 456.698729810778 112.5 500 87.5"/>
</g>
<g style="fill: red;" id="Stickers-l4-o0">
<polygon stroke="black" points="456.698729810778 62.5 456.698729810778 112.5 413.397459621556 87.5"/>
<polygon stroke="black" points="456.698729810778 112.5 413.397459621556 137.5 413.397459621556 87.5"/>
<polygon stroke="black" points="586.602540378444 362.5 543.301270189222 287.5 586.602540378444 312.5"/>
</g>
<g style="fill: purple;" id="Stickers-l6-o0">
<polygon stroke="black" points="586.602540378444 362.5 543.301270189222 287.5 543.301270189222 337.5"/>
</g>
<g style="fill: green;" id="Stickers-l7-o0">
<polygon stroke="black" points="456.698729810778 112.5 413.397459621556 137.5 456.698729810778 162.5"/>
</g>
<g style="fill: violet;" id="Stickers-l31-o0">
<polygon stroke="black" points="586.602540378444 137.5 543.301270189222 212.5 543.301270189222 162.5"/>
</g>
<g style="fill: red;" id="Stickers-l28-o0">
<polygon stroke="black" points="586.602540378444 137.5 543.301270189222 212.5 586.602540378444 187.5"/>
<polygon stroke="black" points="456.698729810778 437.5 456.698729810778 387.5 413.397459621556 412.5"/>
<polygon stroke="black" points="456.698729810778 387.5 413.397459621556 362.5 413.397459621556 412.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l29-o0">
<polygon stroke="black" points="456.698729810778 437.5 456.698729810778 387.5 500 412.5"/>
</g>
<g style="fill: blue;" id="Stickers-l30-o0">
<polygon stroke="black" points="456.698729810778 387.5 413.397459621556 362.5 456.698729810778 337.5"/>
</g>
<g style="fill: violet;" id="Stickers-l18-o0">
<polygon stroke="black" points="500 187.5 543.301270189222 212.5 543.301270189222 162.5"/>
</g>
<g style="fill: red;" id="Stickers-l16-o0">
<polygon stroke="black" points="456.698729810778 212.5 500 187.5 500 237.5"/>
<polygon stroke="black" points="500 187.5 543.301270189222 212.5 500 237.5"/>
<polygon stroke="black" points="456.698729810778 437.5 543.301270189222 437.5 500 462.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l17-o0">
<polygon stroke="black" points="456.698729810778 437.5 543.301270189222 437.5 500 412.5"/>
</g>
<g style="fill: green;" id="Stickers-l19-o0">
<polygon stroke="black" points="456.698729810778 212.5 500 187.5 456.698729810778 162.5"/>
</g>
<g style="fill: red;" id="Stickers-l12-o0">
<polygon stroke="black" points="543.301270189222 112.5 543.301270189222 62.5 586.602540378444 87.5"/>
<polygon stroke="black" points="586.602540378444 137.5 543.301270189222 112.5 586.602540378444 87.5"/>
<polygon stroke="black" points="456.698729810778 287.5 413.397459621556 362.5 413.397459621556 312.5"/>
</g>
<g style="fill: blue;" id="Stickers-l15-o0">
<polygon stroke="black" points="456.698729810778 287.5 413.397459621556 362.5 456.698729810778 337.5"/>
</g>
<g style="fill: violet;" id="Stickers-l14-o0">
<polygon stroke="black" points="586.602540378444 137.5 543.301270189222 112.5 543.301270189222 162.5"/>
</g>
<g style="fill: white;" id="Stickers-l13-o0">
<polygon stroke="black" points="543.301270189222 112.5 543.301270189222 62.5 500 87.5"/>
</g>
<g style="fill: white;" id="Stickers-l1-o0">
<polygon stroke="black" points="543.301270189222 112.5 456.698729810778 112.5 500 87.5"/>
</g>
<g style="fill: violet;" id="Stickers-l3-o0">
<polygon stroke="black" points="500 187.5 543.301270189222 112.5 543.301270189222 162.5"/>
</g>
<g style="fill: green;" id="Stickers-l2-o0">
<polygon stroke="black" points="456.698729810778 112.5 500 187.5 456.698729810778 162.5"/>
</g>
<g style="fill: red;" id="Stickers-l0-o0">
<polygon stroke="black" points="543.301270189222 112.5 456.698729810778 112.5 500 137.5"/>
<polygon stroke="black" points="456.698729810778 112.5 500 187.5 500 137.5"/>
<polygon stroke="black" points="500 187.5 543.301270189222 112.5 500 137.5"/>
</g>
</svg>
` ;
var svg3 = `
<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<g style="fill: yellow;" id="Stickers-l57-o0">
<polygon stroke="black" points="206.698729810778 337.5 293.301270189222 337.5 250 312.5"/>
</g>
<g style="fill: violet;" id="Stickers-l58-o0">
<polygon stroke="black" points="250 412.5 206.698729810778 337.5 206.698729810778 387.5"/>
</g>
<g style="fill: blue;" id="Stickers-l59-o0">
<polygon stroke="black" points="293.301270189222 337.5 250 412.5 293.301270189222 387.5"/>
</g>
<g style="fill: orange;" id="Stickers-l56-o0">
<polygon stroke="black" points="206.698729810778 337.5 293.301270189222 337.5 250 362.5"/>
<polygon stroke="black" points="293.301270189222 337.5 250 412.5 250 362.5"/>
<polygon stroke="black" points="250 412.5 206.698729810778 337.5 250 362.5"/>
</g>
<g style="fill: green;" id="Stickers-l54-o0">
<polygon stroke="black" points="206.698729810778 212.5 163.397459621556 137.5 206.698729810778 162.5"/>
</g>
<g style="fill: orange;" id="Stickers-l52-o0">
<polygon stroke="black" points="206.698729810778 212.5 163.397459621556 137.5 163.397459621556 187.5"/>
<polygon stroke="black" points="206.698729810778 337.5 206.698729810778 287.5 163.397459621556 312.5"/>
<polygon stroke="black" points="163.397459621556 362.5 206.698729810778 337.5 163.397459621556 312.5"/>
</g>
<g style="fill: violet;" id="Stickers-l55-o0">
<polygon stroke="black" points="163.397459621556 362.5 206.698729810778 337.5 206.698729810778 387.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l53-o0">
<polygon stroke="black" points="206.698729810778 337.5 206.698729810778 287.5 250 312.5"/>
</g>
<g style="fill: orange;" id="Stickers-l40-o0">
<polygon stroke="black" points="206.698729810778 62.5 293.301270189222 62.5 250 37.5"/>
<polygon stroke="black" points="293.301270189222 437.5 250 412.5 250 462.5"/>
<polygon stroke="black" points="250 412.5 206.698729810778 437.5 250 462.5"/>
</g>
<g style="fill: white;" id="Stickers-l41-o0">
<polygon stroke="black" points="206.698729810778 62.5 293.301270189222 62.5 250 87.5"/>
</g>
<g style="fill: violet;" id="Stickers-l43-o0">
<polygon stroke="black" points="250 412.5 206.698729810778 437.5 206.698729810778 387.5"/>
</g>
<g style="fill: blue;" id="Stickers-l42-o0">
<polygon stroke="black" points="293.301270189222 437.5 250 412.5 293.301270189222 387.5"/>
</g>
<g style="fill: violet;" id="Stickers-l38-o0">
<polygon stroke="black" points="163.397459621556 362.5 206.698729810778 437.5 206.698729810778 387.5"/>
</g>
<g style="fill: white;" id="Stickers-l37-o0">
<polygon stroke="black" points="206.698729810778 62.5 206.698729810778 112.5 250 87.5"/>
</g>
<g style="fill: green;" id="Stickers-l39-o0">
<polygon stroke="black" points="206.698729810778 112.5 163.397459621556 137.5 206.698729810778 162.5"/>
</g>
<g style="fill: orange;" id="Stickers-l36-o0">
<polygon stroke="black" points="206.698729810778 62.5 206.698729810778 112.5 163.397459621556 87.5"/>
<polygon stroke="black" points="206.698729810778 112.5 163.397459621556 137.5 163.397459621556 87.5"/>
<polygon stroke="black" points="163.397459621556 362.5 206.698729810778 437.5 163.397459621556 412.5"/>
</g>
<g style="fill: orange;" id="Stickers-l60-o0">
<polygon stroke="black" points="336.602540378444 137.5 293.301270189222 212.5 336.602540378444 187.5"/>
<polygon stroke="black" points="293.301270189222 287.5 293.301270189222 337.5 336.602540378444 312.5"/>
<polygon stroke="black" points="293.301270189222 337.5 336.602540378444 362.5 336.602540378444 312.5"/>
</g>
<g style="fill: purple;" id="Stickers-l63-o0">
<polygon stroke="black" points="336.602540378444 137.5 293.301270189222 212.5 293.301270189222 162.5"/>
</g>
<g style="fill: blue;" id="Stickers-l62-o0">
<polygon stroke="black" points="293.301270189222 337.5 336.602540378444 362.5 293.301270189222 387.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l61-o0">
<polygon stroke="black" points="293.301270189222 287.5 293.301270189222 337.5 250 312.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l49-o0">
<polygon stroke="black" points="293.301270189222 287.5 206.698729810778 287.5 250 312.5"/>
</g>
<g style="fill: orange;" id="Stickers-l48-o0">
<polygon stroke="black" points="206.698729810778 212.5 250 187.5 250 237.5"/>
<polygon stroke="black" points="250 187.5 293.301270189222 212.5 250 237.5"/>
<polygon stroke="black" points="293.301270189222 287.5 206.698729810778 287.5 250 262.5"/>
</g>
<g style="fill: green;" id="Stickers-l51-o0">
<polygon stroke="black" points="206.698729810778 212.5 250 187.5 206.698729810778 162.5"/>
</g>
<g style="fill: purple;" id="Stickers-l50-o0">
<polygon stroke="black" points="250 187.5 293.301270189222 212.5 293.301270189222 162.5"/>
</g>
<g style="fill: blue;" id="Stickers-l47-o0">
<polygon stroke="black" points="293.301270189222 437.5 336.602540378444 362.5 293.301270189222 387.5"/>
</g>
<g style="fill: white;" id="Stickers-l45-o0">
<polygon stroke="black" points="293.301270189222 112.5 293.301270189222 62.5 250 87.5"/>
</g>
<g style="fill: purple;" id="Stickers-l46-o0">
<polygon stroke="black" points="336.602540378444 137.5 293.301270189222 112.5 293.301270189222 162.5"/>
</g>
<g style="fill: orange;" id="Stickers-l44-o0">
<polygon stroke="black" points="293.301270189222 112.5 293.301270189222 62.5 336.602540378444 87.5"/>
<polygon stroke="black" points="336.602540378444 137.5 293.301270189222 112.5 336.602540378444 87.5"/>
<polygon stroke="black" points="293.301270189222 437.5 336.602540378444 362.5 336.602540378444 412.5"/>
</g>
<g style="fill: orange;" id="Stickers-l32-o0">
<polygon stroke="black" points="293.301270189222 112.5 206.698729810778 112.5 250 137.5"/>
<polygon stroke="black" points="206.698729810778 112.5 250 187.5 250 137.5"/>
<polygon stroke="black" points="250 187.5 293.301270189222 112.5 250 137.5"/>
</g>
<g style="fill: green;" id="Stickers-l34-o0">
<polygon stroke="black" points="206.698729810778 112.5 250 187.5 206.698729810778 162.5"/>
</g>
<g style="fill: purple;" id="Stickers-l35-o0">
<polygon stroke="black" points="250 187.5 293.301270189222 112.5 293.301270189222 162.5"/>
</g>
<g style="fill: white;" id="Stickers-l33-o0">
<polygon stroke="black" points="293.301270189222 112.5 206.698729810778 112.5 250 87.5"/>
</g>
<g style="fill: red;" id="Stickers-l24-o0">
<polygon stroke="black" points="456.698729810778 337.5 543.301270189222 337.5 500 362.5"/>
<polygon stroke="black" points="543.301270189222 337.5 500 412.5 500 362.5"/>
<polygon stroke="black" points="500 412.5 456.698729810778 337.5 500 362.5"/>
</g>
<g style="fill: purple;" id="Stickers-l26-o0">
<polygon stroke="black" points="500 412.5 456.698729810778 337.5 456.698729810778 387.5"/>
</g>
<g style="fill: blue;" id="Stickers-l27-o0">
<polygon stroke="black" points="543.301270189222 337.5 500 412.5 543.301270189222 387.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l25-o0">
<polygon stroke="black" points="456.698729810778 337.5 543.301270189222 337.5 500 312.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l21-o0">
<polygon stroke="black" points="456.698729810778 337.5 456.698729810778 287.5 500 312.5"/>
</g>
<g style="fill: green;" id="Stickers-l22-o0">
<polygon stroke="black" points="456.698729810778 212.5 413.397459621556 137.5 456.698729810778 162.5"/>
</g>
<g style="fill: purple;" id="Stickers-l23-o0">
<polygon stroke="black" points="413.397459621556 362.5 456.698729810778 337.5 456.698729810778 387.5"/>
</g>
<g style="fill: red;" id="Stickers-l20-o0">
<polygon stroke="black" points="456.698729810778 212.5 413.397459621556 137.5 413.397459621556 187.5"/>
<polygon stroke="black" points="456.698729810778 337.5 456.698729810778 287.5 413.397459621556 312.5"/>
<polygon stroke="black" points="413.397459621556 362.5 456.698729810778 337.5 413.397459621556 312.5"/>
</g>
<g style="fill: blue;" id="Stickers-l10-o0">
<polygon stroke="black" points="543.301270189222 437.5 500 412.5 543.301270189222 387.5"/>
</g>
<g style="fill: white;" id="Stickers-l9-o0">
<polygon stroke="black" points="456.698729810778 62.5 543.301270189222 62.5 500 87.5"/>
</g>
<g style="fill: red;" id="Stickers-l8-o0">
<polygon stroke="black" points="456.698729810778 62.5 543.301270189222 62.5 500 37.5"/>
<polygon stroke="black" points="543.301270189222 437.5 500 412.5 500 462.5"/>
<polygon stroke="black" points="500 412.5 456.698729810778 437.5 500 462.5"/>
</g>
<g style="fill: purple;" id="Stickers-l11-o0">
<polygon stroke="black" points="500 412.5 456.698729810778 437.5 456.698729810778 387.5"/>
</g>
<g style="fill: white;" id="Stickers-l5-o0">
<polygon stroke="black" points="456.698729810778 62.5 456.698729810778 112.5 500 87.5"/>
</g>
<g style="fill: red;" id="Stickers-l4-o0">
<polygon stroke="black" points="456.698729810778 62.5 456.698729810778 112.5 413.397459621556 87.5"/>
<polygon stroke="black" points="456.698729810778 112.5 413.397459621556 137.5 413.397459621556 87.5"/>
<polygon stroke="black" points="413.397459621556 362.5 456.698729810778 437.5 413.397459621556 412.5"/>
</g>
<g style="fill: purple;" id="Stickers-l6-o0">
<polygon stroke="black" points="413.397459621556 362.5 456.698729810778 437.5 456.698729810778 387.5"/>
</g>
<g style="fill: green;" id="Stickers-l7-o0">
<polygon stroke="black" points="456.698729810778 112.5 413.397459621556 137.5 456.698729810778 162.5"/>
</g>
<g style="fill: red;" id="Stickers-l28-o0">
<polygon stroke="black" points="586.602540378444 137.5 543.301270189222 212.5 586.602540378444 187.5"/>
<polygon stroke="black" points="543.301270189222 287.5 543.301270189222 337.5 586.602540378444 312.5"/>
<polygon stroke="black" points="543.301270189222 337.5 586.602540378444 362.5 586.602540378444 312.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l29-o0">
<polygon stroke="black" points="543.301270189222 287.5 543.301270189222 337.5 500 312.5"/>
</g>
<g style="fill: blue;" id="Stickers-l30-o0">
<polygon stroke="black" points="543.301270189222 337.5 586.602540378444 362.5 543.301270189222 387.5"/>
</g>
<g style="fill: violet;" id="Stickers-l31-o0">
<polygon stroke="black" points="586.602540378444 137.5 543.301270189222 212.5 543.301270189222 162.5"/>
</g>
<g style="fill: yellow;" id="Stickers-l17-o0">
<polygon stroke="black" points="543.301270189222 287.5 456.698729810778 287.5 500 312.5"/>
</g>
<g style="fill: violet;" id="Stickers-l18-o0">
<polygon stroke="black" points="500 187.5 543.301270189222 212.5 543.301270189222 162.5"/>
</g>
<g style="fill: green;" id="Stickers-l19-o0">
<polygon stroke="black" points="456.698729810778 212.5 500 187.5 456.698729810778 162.5"/>
</g>
<g style="fill: red;" id="Stickers-l16-o0">
<polygon stroke="black" points="456.698729810778 212.5 500 187.5 500 237.5"/>
<polygon stroke="black" points="500 187.5 543.301270189222 212.5 500 237.5"/>
<polygon stroke="black" points="543.301270189222 287.5 456.698729810778 287.5 500 262.5"/>
</g>
<g style="fill: blue;" id="Stickers-l15-o0">
<polygon stroke="black" points="543.301270189222 437.5 586.602540378444 362.5 543.301270189222 387.5"/>
</g>
<g style="fill: violet;" id="Stickers-l14-o0">
<polygon stroke="black" points="586.602540378444 137.5 543.301270189222 112.5 543.301270189222 162.5"/>
</g>
<g style="fill: white;" id="Stickers-l13-o0">
<polygon stroke="black" points="543.301270189222 112.5 543.301270189222 62.5 500 87.5"/>
</g>
<g style="fill: red;" id="Stickers-l12-o0">
<polygon stroke="black" points="543.301270189222 112.5 543.301270189222 62.5 586.602540378444 87.5"/>
<polygon stroke="black" points="586.602540378444 137.5 543.301270189222 112.5 586.602540378444 87.5"/>
<polygon stroke="black" points="543.301270189222 437.5 586.602540378444 362.5 586.602540378444 412.5"/>
</g>
<g style="fill: violet;" id="Stickers-l3-o0">
<polygon stroke="black" points="500 187.5 543.301270189222 112.5 543.301270189222 162.5"/>
</g>
<g style="fill: white;" id="Stickers-l1-o0">
<polygon stroke="black" points="543.301270189222 112.5 456.698729810778 112.5 500 87.5"/>
</g>
<g style="fill: red;" id="Stickers-l0-o0">
<polygon stroke="black" points="543.301270189222 112.5 456.698729810778 112.5 500 137.5"/>
<polygon stroke="black" points="456.698729810778 112.5 500 187.5 500 137.5"/>
<polygon stroke="black" points="500 187.5 543.301270189222 112.5 500 137.5"/>
</g>
<g style="fill: green;" id="Stickers-l2-o0">
<polygon stroke="black" points="456.698729810778 112.5 500 187.5 456.698729810778 162.5"/>
</g>
</svg>
` ;
var svg = (true ? svg3 : true ? svg2 : svg1) ;
var ksolve = `Name NOGOODNAME

# Marc Ringuette 9/12/2018
#
# 12 orientations of 16 pieces flattened into 4x16 permutations.
#
# Solved position here is IDentity (1-64 in sequence); this is handy for composing moves into macro-moves.

Set Stickers 64 1

Solved
Stickers
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64
End

Move Rx
Stickers
17 20 18 19 21 23 24 22 5 8 6 7 1 3 4 2 29 31 32 30 25 28 26 27 9 11 12 10 13 16 14 15 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64
End

Move Ry
Stickers
13 14 15 16 1 2 3 4 5 6 7 8 9 10 11 12 29 30 31 32 17 18 19 20 21 22 23 24 25 26 27 28 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64
End

Move Rz
Stickers
5 7 8 6 21 24 22 23 25 27 28 26 9 12 10 11 1 4 2 3 17 19 20 18 29 32 30 31 13 15 16 14 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64
End

Move Lx
Stickers
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 49 52 50 51 53 55 56 54 37 40 38 39 33 35 36 34 61 63 64 62 57 60 58 59 41 43 44 42 45 48 46 47
End

Move Ly
Stickers
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 45 46 47 48 33 34 35 36 37 38 39 40 41 42 43 44 61 62 63 64 49 50 51 52 53 54 55 56 57 58 59 60
End

Move Lz
Stickers
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 37 39 40 38 53 56 54 55 57 59 60 58 41 44 42 43 33 36 34 35 49 51 52 50 61 64 62 63 45 47 48 46
End

Move Ix
Stickers
1 2 3 4 21 23 24 22 5 8 6 7 13 14 15 16 17 18 19 20 25 28 26 27 9 11 12 10 29 30 31 32 49 52 50 51 37 38 39 40 41 42 43 44 33 35 36 34 61 63 64 62 53 54 55 56 57 58 59 60 45 48 46 47
End

Move Iy
Stickers
1 2 3 4 10 9 12 11 46 45 48 47 13 14 15 16 17 18 19 20 26 25 28 27 62 61 64 63 29 30 31 32 6 5 8 7 37 38 39 40 41 42 43 44 34 33 36 35 22 21 24 23 53 54 55 56 57 58 59 60 50 49 52 51
End

Move Iz
Stickers
1 2 3 4 35 34 36 33 48 46 45 47 13 14 15 16 17 18 19 20 8 6 5 7 11 10 12 9 29 30 31 32 52 50 49 51 37 38 39 40 41 42 43 44 63 62 64 61 23 22 24 21 53 54 55 56 57 58 59 60 28 26 25 27
End

Move Ox
Stickers
17 20 18 19 5 6 7 8 9 10 11 12 1 3 4 2 29 31 32 30 21 22 23 24 25 26 27 28 13 16 14 15 33 34 35 36 53 55 56 54 37 40 38 39 45 46 47 48 49 50 51 52 57 60 58 59 41 43 44 42 61 62 63 64
End

Move Oy
Stickers
38 37 40 39 5 6 7 8 9 10 11 12 2 1 4 3 54 53 56 55 21 22 23 24 25 26 27 28 18 17 20 19 33 34 35 36 42 41 44 43 14 13 16 15 45 46 47 48 49 50 51 52 58 57 60 59 30 29 32 31 61 62 63 64
End

Move Oz
Stickers
20 18 17 19 5 6 7 8 9 10 11 12 31 30 32 29 55 54 56 53 21 22 23 24 25 26 27 28 60 58 57 59 33 34 35 36 3 2 4 1 16 14 13 15 45 46 47 48 49 50 51 52 40 38 37 39 43 42 44 41 61 62 63 64
End

Move U
Stickers
41 42 43 44 45 46 47 48 33 34 35 36 37 38 39 40 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 9 10 11 12 13 14 15 16 1 2 3 4 5 6 7 8 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64
End

Move D
Stickers
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 57 58 59 60 61 62 63 64 49 50 51 52 53 54 55 56 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 25 26 27 28 29 30 31 32 17 18 19 20 21 22 23 24
End

Move F
Stickers
53 54 55 56 49 50 51 52 9 10 11 12 13 14 15 16 37 38 39 40 33 34 35 36 25 26 27 28 29 30 31 32 21 22 23 24 17 18 19 20 41 42 43 44 45 46 47 48 5 6 7 8 1 2 3 4 57 58 59 60 61 62 63 64
End

Move B
Stickers
1 2 3 4 5 6 7 8 61 62 63 64 57 58 59 60 17 18 19 20 21 22 23 24 45 46 47 48 41 42 43 44 33 34 35 36 37 38 39 40 29 30 31 32 25 26 27 28 49 50 51 52 53 54 55 56 13 14 15 16 9 10 11 12
End
` ;
function domove(mv:string, mod:number) {
   try { // try to merge this move
      var oldalg = algparse((algoinput.value)) ;
      var newmv = algparse((mv)) ;
      if (oldalg instanceof Sequence && newmv instanceof Sequence &&
          newmv.nestedUnits.length == 1 && oldalg.nestedUnits.length > 0) {
         var lastmv = oldalg.nestedUnits[oldalg.nestedUnits.length-1] ;
         var thismv = newmv.nestedUnits[0] ;
         if (lastmv instanceof SiGNMove && thismv instanceof SiGNMove &&
             lastmv.family == thismv.family &&
             lastmv.outerLayer == thismv.outerLayer &&
             lastmv.innerLayer == thismv.innerLayer) {
            var newAmount = thismv.amount + lastmv.amount ;
            var newArr = oldalg.nestedUnits.slice() ;
            if (newAmount == 0 || (mod > 0 && newAmount % mod == 0)) {
               newArr.length -= 1 ;
            } else {
               // canonicalize the representation
               while (newAmount + newAmount > mod)
                  newAmount -= mod ;
               while (newAmount + newAmount <= -mod)
                  newAmount += mod ;
               newArr[oldalg.nestedUnits.length-1] =
                 new SiGNMove(lastmv.outerLayer, lastmv.innerLayer,
                              lastmv.family, newAmount) ;
            }
            algoinput.value = (algToString(new Sequence(newArr))) ;
            checkchange() ;
            return ;
         }
      }
   } catch (e) { }
   algoinput.value += ' ' + (mv) ;
   checkchange() ;
}
function LucasSetup() {
   puzzle = parse(ksolve) ;
   new KPuzzle(puzzle) ;
   puzzle.svg = svg ;
   algoinput.style.backgroundColor = '' ;
   if (!trimEq(lastalgo, "")) {
      try {
         setAlgo(lastalgo, true);
      } catch {
 console.log("Could not parse " + lastalgo) ;
         algoinput.style.backgroundColor = '#ff8080' ;
      }
   } else
      setAlgo("", true) ;
}
function trimEq(a:string, b:string) {
   return a.trim() == b.trim() ;
}
function setAlgo(str:string, writeback:boolean) {
   var seq:Sequence ;
   if (str.trim().length == 0) {
      seq = algparse("Rx"+"4") ;
      str = "" ;
   } else {
      seq = algparse(str) ;
      str = algToString(seq) ;
   }
   var elem = document.querySelector("#custom-example");
   if (elem) {
      elem.textContent = "" ;
 //      This kills full screen.
      twisty = new Twisty(elem, {
        puzzle: puzzle,
        alg: seq
      });
      (twisty as any).anim.skipToEnd() ;
      if (writeback) {
         algoinput.value = (str) ;
         lastalgo = str ;
      }
   }
}
function checkchange() {
   var algo = (algoinput.value) ;
   if (algo == null)
      return ;
   if (trimEq(algo, lastalgo))
      return ;
   if (!trimEq(lastalgo, algo)) {
      lastalgo = algo ;
      algoinput.style.backgroundColor = '' ;
      var toparse = "" ;
      if (algo.trim().length > 0) {
         toparse = algo ;
      } else {
         toparse = "" ;
      }
      if (puzzle) {
         try {
            setAlgo(toparse, false) ;
         } catch (e) {
 console.log("Could not parse " + toparse) ;
            algoinput.style.backgroundColor = '#ff8080' ;
            return ;
         }
      }
   }
}
function modof(mv:string) {
   if (mv.length == 1)
      return 2 ;
   return 4 ;
}
export function setup() {
   algoinput = <HTMLInputElement>document.getElementById('algorithm') ;
   const qalg = algToString(getAlgURLParam("alg"));
   if (qalg != '') {
      algoinput.value = qalg ;
      lastalgo = qalg ;
   }
   var moves = ["Rx","Ry","Rz","Ox","Oy","Oz","Ix","Iy","Iz","Lx","Ly","Lz","U","D","F","B"] ;
   for (var i=0; i<moves.length; i++)
      (<HTMLInputElement>document.getElementById(moves[i])).onclick =
         function(mv){return function(){domove(mv,modof(mv))}}(moves[i]) ;
   LucasSetup() ;
   checkchange() ;
   setInterval(checkchange, 0.5) ;
}
window.addEventListener("load", setup);
