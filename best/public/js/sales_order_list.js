frappe.listview_settings['Sales Order'] = {
    onload(listview) {
        // Add a custom button to the list view
        listview.page.add_inner_button('Show Selected Orders', () => {
            let selected = listview.get_checked_items();

            if (!selected.length) {
                frappe.msgprint('Please select at least one Sales Order.');
                return;
            }

            let names = selected.map(row => row.name).join(', ');
            frappe.msgprint(`Selected Sales Orders: <b>${names}</b>`);
        });

        listview.page.add_inner_button('Navigate to Create', () => {
            frappe.set_route('Form', 'Sales Order', '');
        });
    }
};
