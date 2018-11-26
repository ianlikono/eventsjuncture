# CARD COMPONENT

_all the props are required in the format as in the example_

### Card Component Data

```
const title1 =
"Summer's end and a the 'Grey Leaves' festival Begins Summer's end and a the 'Grey Leaves' festival Begins";
const description1 =
"Summer's end and a the 'Grey Leaves' festival Begins Summer's end and a the 'Grey Leaves' festival Begins";
const cover1 =
"https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV";
const day1 = 24;
const month1 = "January";
const dayTime1 = "wed, 9:30PM";
```

### Card Component

```
<Card
        coverUrl={cover1}
        description={description1}
        title={title1}
        tagColor="purple"
        day={day1}
        month={month1}
        dayTime={dayTime1}
        tag="Music"
/>
```
### Button Component
```
To determine the size of the button component, you can pass the prop; big, small or tiny.

To make the button round, pass the prop round.

The button component accepts the prop purple and aqua to determine it's color. The default color is blue.

if you wanted a blue big button, you will pass prop shown below
<Button 
blue
big
/>

Button also accepts font-size and width prop.

You can pass an onClick method like so
<Button
onClick={}
fontSize="12rem"
width="12rem"
/>
```

### Input Component
```
the input component takes props; name and type.
Name refers to the name of the input and the type is either text or password.

this also accepts a handle change prop

<Input
handleChange={}
name="Name:"
type="Text"
/> 

<Input
name="Password:"
type="password"
/> 
```