# Store Explorer
`the_one_that_lets_you_explore_your_data_without_typing`

## Usage

```python
# You must import load_store_child so it's in the global namespace where
# it can be called from JavaScript.
from oui_notebook.store_explorer import explore_store, load_store_child

my_store = {}

explore_store(my_store, 'my_store')
```

The `explore_store` function will take any object that implements `__iter__`. It is necessary to pass the global variable name of the store as a second argument to enable the JavaScript process to correctly reference the variable when invoking Python functions.

1. Executing the function in a notebook cell will output an interactive view of the keys in the store, along with the store's metadata, if any (from `getattr(store, 'meta')`).
2. Clicking on a key in the list will retrieve the value for that key.
3. If the value is a primitive, tuple, or list, or does not implement `__iter__`, the view will indicate that you've selected a leaf node.
4. Otherwise, the view will expand to display the keys of the inner value.
5. Repeat to an arbitrary nesting depth.

## Limitations (for now)

* It can't do anything with leaf nodes yet.
* It does not check the size of lists to avoid rendering too much at once (you can cause your web browser to crash if you pass a store with thousands of keys).

## Other todos

* Improve styling and allow customization.
* Display store metadata more intelligently.
* ...
