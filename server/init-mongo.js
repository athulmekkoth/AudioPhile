db = db.getSiblingDB("test");
db.createUser({
    user: "athul",
    pwd: "athul",
    roles: [{ role: "readWrite", db: "test" }]
});
