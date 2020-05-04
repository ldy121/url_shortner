import startServer from "../server/server"

test ("Test URL Shorter server", () => {
    expect(startServer()).toBe(0);
});