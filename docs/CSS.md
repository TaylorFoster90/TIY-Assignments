### 1. `flex`
* *elements:* none
* *inherited:* no 

#### Values

* `<flex-grow>` -- defines the flex-grow of the flex item
* `<flex-shrink>` -- defines the flex-shrink of the flex item
* `<flex-basis>` -- defines the flex-basis of the flex item
* `none` -- this keyword computes to 0 0 auto;

### 2. `margin`
* *elements:* all elements except elements with table display types other than table-caption, table and inline-table.
* *inherited:* no

#### Values

* `<length>` -- specifies a fixed width
* `<percentage>` -- relative to the width containing the block
*  `auto` -- auto is replaced by some suitable value 

### 3. `text-align`
* *elements:* block-containers
* *inherited:* yes

#### Values
* `start` -- same as left if direction is left-to-right
* `end` -- the same as right if direction is left-to-right
* `left` -- the inline contents are aligned to the left edge of the line box
* `right` -- the inline contents are aligned to the right edge of the line box 
* `center` -- the inline contents are centered within the line box
* `<string>` -- the first occurrence of the one-char string is the element used for alingment. the keyword that follows or precedes it indicates how it is aligned
* `justify` -- the text is justified
* `match-parent` -- similar to inherit with the difference that the value start and end are calculated according the parent's direction and are replaced by the adequate left or right value

### 4. `all`
* *elements:* all elements
* *inherited:* no

#### Values
* `initial` -- Indicates to change all the properties applying to the element or the element's parent to their initial value.
* `inherit` -- Indicates to change all the properties applying to the element or the element's parent to their parent value.
* `unset` -- Indicates to change all the properties applying to the element or the element's parent to their parent value if they are inheritable or to their initial value if not.

### 5. `isolation`
* *elements:* all elements
* *inherited:* no

#### Values
* `auto` -- Keyword indicating that a new stacking context has to be created only if one properties applied to the element requires it
* `isloate` -- Keyword indicating that a new stacking context must be created

### 6. `resize`
* *elements:* elements with overflow other than visible
* *inherited:* no

#### Values
* `none` -- The element offers no user-controllable method for resizing the element
* `both` -- The element displays a mechanism for allowing the user to resize the element, which may be resized both horizontally and vertically
* `horizontal` -- The element displays a mechanism for allowing the user to resize the element, which may only be resized horizontally
* `vertical` -- The element displays a mechanism for allowing the user to resize the element, which may only be resized vertically

### 7. `font` 
* *elements:* all elements
* *inherited:* yes

#### Values
* `<font-style>`
* `<font-variant>`
* `<font-weight>`
* `<font-size>`
* `<font-height>`
* `<font-family>`

### 8. `bottom`
* *elements:* positioned elements
* *inherited:* no

#### Values
* `<length>` -- a negative, null, or positive
* `<percentage>` -- a percentage of the containing blocks height
* `auto`
* `inherit` -- Indicates that the value is the same as the computed value from its parent element

### 9. `widows`
* *elements:* block container elements
* *inherited:* yes

#### Values 
* `<integer>` -- Denotes the minimum amount of lines that can stay alone on the top of a new page

### 10. `border-radius` 
* *elements:* all elements
* *inherited:* no

#### Values
* `<length>` -- Denotes the size of the circle radius or the semi-major and semi-minor axes of the ellipsis
* `<percentage>` -- Denotes the size of the circle radius, or the semi-major and semi-minor axes of the ellipsis, using percentage values. Percentages for the horizontal axis refer to the width of the box, percentages for the vertical axis refer to the height of the box