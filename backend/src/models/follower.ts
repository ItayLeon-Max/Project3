import { 
    Column,
    ForeignKey, 
    Model, 
    Table, 
    DataType,
    PrimaryKey 
} from "sequelize-typescript";
import User from "./user";
import Freedom from "./freedom";

@Table({
    underscored: true,
})
export default class Follower extends Model {

    @PrimaryKey
    @ForeignKey(() => User)
    @Column(DataType.UUID)
    userId: string;

    @PrimaryKey
    @ForeignKey(() => Freedom)
    @Column(DataType.UUID)
    freedomId: string;
}