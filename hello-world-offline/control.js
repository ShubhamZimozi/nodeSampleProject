export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

//odule.exports.handler = serverless(app);
//export default getContacts;

module.exports = getContacts.export();
