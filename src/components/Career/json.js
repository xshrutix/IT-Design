export const json = {
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "panel",
                    "name": "personal-info",
                    "elements": [
                        {
                            "type": "text",
                            "name": "first-name",
                            "title": "First name",
                            "isRequired": true
                        },
                        {
                            "type": "text",
                            "name": "last-name",
                            "startWithNewLine": false,
                            "title": "Last name",
                            "isRequired": true
                        },
                        {
                            "type": "text",
                            "name": "birthdate",
                            "title": "Date of birth",
                            "isRequired": true,
                            "inputType": "date"
                        }
                    ],
                    "title": "Personal Information"
                },
                {
                    "type": "text",
                    "name": "email",
                    "title": "Email",
                    "inputType": "email",
                    "placeholder": "mail@example.com"
                },
                {
                    "type": "file",
                    "name": "resume",
                    "title": "Upload your resume",
                    "acceptedTypes": "application/pdf"
                }
            ]
        }
    ],
    "showQuestionNumbers": "off",
    "questionErrorLocation": "bottom",
    "completeText": "Send",
    "widthMode": "responsive",
    "width": "800px"
}