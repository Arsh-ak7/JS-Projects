package sudoku.buildLogic;

import sudoku.computaionlogic.GameLogic;
import sudoku.persistance.LocalStorageImpl;
import sudoku.problemdomain.IStorage;
import sudoku.problemdomain.SudokuGame;
import sudoku.userinterface.IUserInterfaceContract;
import sudoku.userinterface.logic.ControlLogic;

import java.io.IOException;

public class SudokuBuildLogic {
    public static void build(IUserInterfaceContract.View userInterface) throws IOException{
        SudokuGame initialState;
        IStorage storage = new LocalStorageImpl();
        try{
            initialState= storage.getGameData();
        } catch (IOException e){
            initialState= GameLogic.getNewGame();
            storage.updateGameData(initialState);
        }
        IUserInterfaceContract.EventListener uilogic = new ControlLogic(storage,userInterface);
        userInterface.setListener(uilogic);
        userInterface.updateBoard(initialState);
    }
}
