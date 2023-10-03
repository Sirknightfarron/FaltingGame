import java.util.HashMap;

import javax.naming.OperationNotSupportedException;

import io.vertx.core.json.JsonObject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;

@Path("/api")
public class API {
    public static HashMap<String,Game> games;

    static {
        games = new HashMap<>();

        // Game game = new Game("123", "pw",8);
        // game.addUser("hark");
    
        // game.writeText("Ich bin der Hark.");
        // games.put("123", game);
    }

    @GET
    @Path("/game-list")
    public JsonObject getGameList() {
        return new JsonObject().put("games", games.values());
    }

    @GET
    @Path("/user-list/{gameId}")
    public JsonObject getUserList(String gameId) throws OperationNotSupportedException {
        Game game = games.get(gameId);
        if (game == null) {
            throw new OperationNotSupportedException("Game does not exist yet.");
        }

        return new JsonObject().put("users", game.getUserList());
    }
     
    @GET
    @Path("/final-text/{gameId}")
    public JsonObject getFinalText(String gameId) throws OperationNotSupportedException {
        Game game = games.get(gameId);
        
        if (game == null) {
            throw new OperationNotSupportedException("Game does not exist yet.");
        }

        if (game.hasGameEnded()) {
            return new JsonObject().put("finalText", game.getFinalText());
        } else {
            throw new OperationNotSupportedException("Game has not ended yet.");
        }
    }

    @GET
    @Path("/whose-turn/{gameId}")
    public JsonObject whoseTurn(String gameId) throws OperationNotSupportedException {
        Game game = games.get(gameId);
        if (game == null) {
            throw new OperationNotSupportedException("Game does not exist yet.");
        }
        
        return new JsonObject().put("user", game.whoseTurn()); 
    }

    @POST
    @Path("/create-game/{gameId}")
    public void createGame(String gameId, JsonObject body) throws OperationNotSupportedException {
        Game game = games.get(gameId);
        
        if (game != null) {
            throw new OperationNotSupportedException("Game already exists.");
        }

        String password = body.getString("password");
        int sentencesPerPlayer = body.getInteger("sentencesPerPlayer");
        // System.out.println(sentencesPerPlayer);
        Game newGame = new Game(gameId, password, sentencesPerPlayer);

        games.put(gameId, newGame);
    }

    @POST
    @Path("/join/{gameId}")
    public void joinGame(String gameId, JsonObject body) throws OperationNotSupportedException {
        Game game = games.get(gameId);
        
        if (game == null) {
            throw new OperationNotSupportedException("Game does not exist yet.");
        }

        if(game.verifyPassword(body.getString("password"))){
            String userId = body.getString("userId");
            game.addUser(userId);
        }
    }

    @POST
    @Path("/add-text/{gameId}")
    public void textSended(String gameId, JsonObject body) throws OperationNotSupportedException {
        String text = body.getString("text");
        String userId = body.getString("userId");
        Game game = games.get(gameId);
        
        if (game == null) {
            throw new OperationNotSupportedException("Game does not exist yet.");
        }

        // if user not in user list of game throw exception
        if (!game.checkIfUserExists(userId)) {
            // quarkus throw 401
            throw new OperationNotSupportedException("User did join game yet.");
        }

        if (game.whoseTurn().getUsername().equals(userId)){
            game.writeText(text);
        } else {
            throw new OperationNotSupportedException("Not the user's turn.");
        }
    }

}
