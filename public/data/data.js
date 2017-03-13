var data = {
    form: [
        {
            type: 'input',
            inputType: 'text',
            multiEmail: true,
            isRequired: true,
            model: 'to',
            label: 'Email Recipients: (Separate with a comma)',
            placeholder: 'Email Recipients',
            width: 6
        }, {
            type: 'input',
            inputType: 'email',
            multiEmail: false,
            isRequired: true,
            model: 'from',
            label: 'From',
            placeholder: 'Email Sender',
            width: 6
        }, {
            type: 'input',
            inputType: 'text',
            multiEmail: true,
            isRequired: false,
            model: 'cc',
            label: 'CC: (Separate with a comma)',
            placeholder: 'Email CC',
            width: 6
        }, {
            type: 'input',
            inputType: 'text',
            multiEmail: true,
            isRequired: false,
            model: 'bcc',
            label: 'BCC: (Separate with a comma)',
            placeholder: 'Email BCC',
            width: 6
        }, {
            type: 'input',
            inputType: 'text',
            multiEmail: false,
            isRequired: true,
            model: 'subject',
            label: 'Subject',
            placeholder: 'Email Subject',
            width: 12
        }, {
            type: 'textarea',
            model: 'body',
            isRequired: true,
            label: 'Body',
            placeholder: 'Email Body',
            width: 12
        }
    ]

};