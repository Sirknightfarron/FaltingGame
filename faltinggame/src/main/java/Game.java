import java.util.ArrayList;
import java.util.List;

public class Game {
    private List<User> userList;
    private String gameID;
    private String password;
    private List<String> text;
    private int sentencesPerPlayer;
    private boolean gameHasEnded;
    private int sentencesAll;
    private int turnNow;

    public Game(String gameID, String password, int sentencesPerPlayer) {
        this.gameID = gameID;
        this.password = password;
        this.sentencesPerPlayer = sentencesPerPlayer;
        this.text = new ArrayList<String>();  
        this.gameHasEnded = false;
        this.turnNow= 1;
        this.userList = new ArrayList<User>();
    }

    public User whoseTurn() {
        return userList.get((text.size() % userList.size()));
    }

    public String lastTextAdded(){
        return text.get(text.size() - 1);
    }

    private void endGame() {
        gameHasEnded =true;
    }

    public String getFinalText() {
        StringBuilder str = new StringBuilder();
        for (String s : text){
            str.append(s);
        }
        return str.toString();
    }

    public void addUser(String userId)  {
        User user = new User(userId);
        this.userList.add(user);
        this.sentencesAll = sentencesPerPlayer * userList.size();
    }

    public void writeText(String sentence) {
        this.text.add(sentence);
        turnNow++;
        if(turnNow == sentencesAll){
            endGame();
        }
    }

    public String getGameID() {
        return this.gameID;
    }

    public boolean hasGameEnded(){
        return gameHasEnded;
    }

    public String getPassword() {
        return this.password;
    }
    
    public boolean verifyPassword(String pw){
        return password.equals(pw);
    }

    public  List<User> getUserList() {
        return this.userList;
    }

    public List<String> getText() {
        return this.text;
    }

    public int getSentencesPerPlayer() {
        return this.sentencesPerPlayer;
    }

    public boolean checkIfUserExists(String userId) {
        return this.userList.stream().filter(u -> u.getUsername().equals(userId)).count() > 0;
    }
}