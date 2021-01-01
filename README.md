### React Customizable Countdown


You can install the module via npm:

 `npm install react-customizable-countdown --save`


### Usage
For using counter with standard styles - 

```
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from 'react-customizable-countdown';
 
ReactDOM.render(
  <Counter 
    date="2021-01-10T14:48:00" 
  />,
  document.getElementById('root')
);
```

Applying custom styles for labels, counter or timer component itself 

```
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from 'react-customizable-countdown';
 
ReactDOM.render(
   <Counter 
        date="2021-01-10T14:48:00" 
        timerStyle={{marginTop:'10px'}} 
        counterStyle={{color:'goldenRod', fontSize:'2.em'}} 
        labelStyle={{color:'grey',fontSize:'12px'}}
    /> ,
  document.getElementById('root')

```

### Props

| Name  | Type | Default |
| ------------- | ------------- | ------------- | 
| date  | String  | date 24 Hrs from now |
| timerStyle | style Object | undefined | 
| counterStyle | style Object | undefined | 
| labelStyle | style Object | undefined | 

