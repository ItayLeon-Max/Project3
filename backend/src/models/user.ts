import { 
    AllowNull, 
    Column, 
    DataType, 
    Default, 
    HasMany,
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import Follower from "./follower";

@Table({
    underscored: true,
})
export default class User extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    lastName: string;

    @AllowNull(false)
    @Column
    email: string;

    @AllowNull(false)
    @Column
    password: string;

    @AllowNull(false)
    @Column
    role: string;

    @HasMany(() => Follower)
    followers: Follower[];
}