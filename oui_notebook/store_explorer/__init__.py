from IPython.display import display, Javascript
import json
import traceback

store_dict = {}


def set_store(key: str, store):
    store_dict[key] = store


def get_store(key: str):
    return store_dict.get(key, None)


def explore_store(store, store_varname):
    root_keys = list(store)
    json_friendly_root_keys = json.loads(json.dumps(root_keys))
    meta = getattr(store, 'meta', {})
    set_store(store_varname, store)
    javascript_statement = f'otosense.renderStoreExplorer(element.get(0), {json_friendly_root_keys}, "{store_varname}", {meta});'
    js_target = display(Javascript('console.log("registered reusable JS target")'), display_id='myjs')
    set_store('js_target', js_target)
    return Javascript(javascript_statement.replace('True', 'true').replace('None', 'null'))


def load_store_child(store_varname, child_path):
    try:
        js_target = get_store('js_target')
        store = store_dict.get(store_varname, None)
        if not store:
            js_target.update(Javascript('window.otosense.childIsReady(null);'))
        eval_statement = f'store{child_path}'
        child = eval(eval_statement, {'store': store})
        js_target.update(Javascript(f'console.log(`child : {child}`)'))
        if not child:
            js_target.update(Javascript('window.otosense.childIsReady(null);'))
        try:
            child_keys = list(child)
        except:
            child_keys = []
        meta = getattr(child, 'meta', {})
        is_leaf = 'true' if isinstance(child, (list, int, float, str, bool, tuple)) else 'false'
        js_target.update(Javascript(f'console.log(`{store_varname} : {child_path}`)'))
        javascript_statement = f'window.otosense.childIsReady({{ meta: {meta}, keys: {child_keys}, isLeaf: {is_leaf } }});'
        set_store('js', javascript_statement)
        js_target.update(Javascript(javascript_statement.replace('True', 'true').replace('None', 'null')))
    except Exception as err:
        set_store('error', traceback.format_exc())
        return Javascript('window.otosense.childIsReady(null);')
