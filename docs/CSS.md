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

*`<length>` -- specifies a fixed width
*`<percentage>` -- relative to the width containing the block
* `auto` -- auto is replaced by some suitable value 

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
* `auto` -- Keyword indicating that a new stacking context has to be created only if one properties applied to the element requires it.
* `isloate` -- Keyword indicating that a new stacking context must be created