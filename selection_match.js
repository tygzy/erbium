function match_selection_value(intended_value, select_element) {
    var select_values = select_element.children;
    for (var i=0; i<select_values.length; i++) {
        if(select_values[i].value == intended_value) {
            select_element.value = intended_value;
        }
    }
}
