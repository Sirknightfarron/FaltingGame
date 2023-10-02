import java.util.List;

public class Game {
    private List<User> userList;
    private String gameID;
    private String password;
    private int countRounds;

    public Game(String gameID, String password, int countRounds) {
        this.gameID = gameID;
        this.password = password;
        this.countRounds = countRounds;
    }

    public void addUser(User user) {
        this.userList.add(user);
    }

    public String GameID() {
        return this.gameID;
    }

    public int Password() {
        return this.password;
    }
    
    public int CountRounds() {
        return this.countRounds;
    }

    public int UserList() {
        return this.userList;
    }
}
