type Session {
    _id: string;
    duration: number;
    userId: string;
}
​
class Countly {
    public client;
    public API_KEY = 'adf8739adf00ad9adsf9808d';
    public CLIENT_ID = '234asdfa99dc'
​
    public Countly() {
        this.client = axios.create({
            baseUrl: 'https://www.countly.com'
        });
    }
​
    public getSessions() {
        this.client.get('session', {
            apiKey: API_KEY,
            clientId: CLIENT_ID
        }).then((d) => {
            return d;
        }).catch((e) => {
            console.log(e);
        });
    }
​
    public getUsers() {
        this.client.get('users', {
            apiKey: API_KEY,
            clientId: CLIENT_ID
        }).then((d) => {
            return d;
        }).catch((e) => {
            console.log(e);
        });
    }
​
    public findSessionById(sessionId) {
        var sessions = this.getSessions();
​
        let session = sessions.find(session =>  { session._id == sessionId });
​
        return session;
    }
​
    public findSessionsForUser(userId) {
        var sessions = this.getSessions();
        var foundSessions;
​
        sessions.forEach((session) => {
            if (session.userId == userId)
                foundSessions.push(session);
        });
​
        return foundSessions;
    }
}

