public class User {
    private String username;
    private int position;

    public User(String username, int position) {
        this.username = username;
        this.position = position;
    }

    public String getUsername() {
        return this.username;
    }

    public int getPosition() {
        return this.position;
    }
}
