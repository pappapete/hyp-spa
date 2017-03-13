var data = {
    form: [
        {
            type: 'input',
            inputType: 'text',
            multiEmail: true,
            model: 'to',
            label: 'Email Recipients: (Separate with a comma)',
            placeholder: 'Email Recipients',
            width: 6
        }, {
            type: 'input',
            inputType: 'email',
            multiEmail: false,
            model: 'from',
            label: 'From',
            placeholder: 'Email Sender',
            width: 6
        }, {
            type: 'input',
            inputType: 'text',
            multiEmail: true,
            model: 'cc',
            label: 'CC: (Separate with a comma)',
            placeholder: 'Email CC',
            width: 6
        }, {
            type: 'input',
            inputType: 'text',
            multiEmail: true,
            model: 'bcc',
            label: 'BCC: (Separate with a comma)',
            placeholder: 'Email BCC',
            width: 6
        }, {
            type: 'input',
            inputType: 'text',
            multiEmail: false,
            model: 'subject',
            label: 'Subject',
            placeholder: 'Email Subject',
            width: 12
        }, {
            type: 'textarea',
            model: 'body',
            label: 'Body',
            placeholder: 'Email Body',
            width: 12
        }
    ]

};