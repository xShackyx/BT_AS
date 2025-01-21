function Searchbar({
  searchQuery,
  setSearchQuery,
  filterQuery,
  setFilterQuery,
}) {
  return (
    <form className="p-1 w-full flex flex-col gap-1 border border-black rounded-md">
      <div className="flex flex-col 2xl:flex-row rounded gap-1">
        <input
          className="rounded border border-black flex-auto"
          type="text"
          placeholder="Search for an unit"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex flex-col 2xl:flex-row gap-1">
          <select
            className="rounded"
            name="rules"
            value={filterQuery.rules}
            onChange={(e) =>
              setFilterQuery({
                ...filterQuery,
                Rules: e.target.value != "" ? e.target.value : null,
              })
            }
          >
            <option value="">All Rules</option>
            <option value="55">Introductory Rules</option>
            <option value="4">Standard Rules</option>
            <option value="5">Advanced Rules</option>
          </select>
          <select
            className="rounded"
            name="tech"
            value={filterQuery.Technologies}
            onChange={(e) =>
              setFilterQuery({
                ...filterQuery,
                Technologies: e.target.value != "" ? e.target.value : null,
              })
            }
          >
            <option value="">All Tech</option>
            <option value="1">Inner Sphere Tech</option>
            <option value="2">Clan Tech</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col rounded gap-1">
        <select
          className="rounded overflow"
          name="era"
          value={filterQuery.AvailableEras}
          onChange={(e) =>
            setFilterQuery({
              ...filterQuery,
              AvailableEras: e.target.value != "" ? e.target.value : null,
            })
          }
        >
          <option value="">All Eras</option>
          <option value="10">Star League Era</option>
          <option value="11">Early Succession Wars Era</option>
          <option value="255">Late Succession Wars Era / LosTech</option>
          <option value="256">Late Succession Wars Era / Reinassance</option>
          <option value="13">Clan Invasion Era</option>
          <option value="247">Civil War Era</option>
          <option value="14">Jihad Era</option>
          <option value="15">Early Republic Era</option>
          <option value="254">Late Republic Era</option>
          <option value="16">Dark Ages Era</option>
          <option value="257">ilClan Era</option>
        </select>
        <div className="flex flex-auto flex-col 2xl:flex-row gap-1">
          <select
            className="rounded"
            name="type"
            value={filterQuery.Types}
            onChange={(e) =>
              setFilterQuery({
                ...filterQuery,
                Types: e.target.value != "" ? e.target.value : null,
              })
            }
          >
            <option value="">All Unit Types</option>
            <option value="18">BattleMech</option>
            <option value="19">Combat Vehicle</option>
            <option value="17">Aerospace</option>
            <option value="21">Infantry</option>
            <option value="20">IndustrialMech</option>
            <option value="23">ProtoMech</option>
            <option value="24">Support Vehicle</option>
          </select>
          <select
            className="flex-auto rounded"
            name="role"
            value={filterQuery.Roles}
            onChange={(e) =>
              setFilterQuery({
                ...filterQuery,
                Roles: e.target.value != "" ? e.target.value : null,
              })
            }
          >
            <option value="">All Roles</option>
            <option className="font-bold uppercase" disabled>
              Ground Unit
            </option>
            <option value="Ambusher">Ambusher</option>
            <option value="Brawler">Brawler</option>
            <option value="Juggernaut">Juggernaut</option>
            <option value="Missile Boat">Missile Boat</option>
            <option value="Scout">Scout</option>
            <option value="Skirmisher">Skirmisher</option>
            <option value="Sniper">Sniper</option>
            <option value="Striker">Striker</option>
            <option className="font-bold uppercase" disabled>
              Aerospace
            </option>
            <option value="Attack">Attack</option>
            <option value="Dogfighter">Dogfighter</option>
            <option value="Fast Dogfigher">Fast Dogfigher</option>
            <option value="Fire Support">Fire Support</option>
            <option value="Interceptor">Interceptor</option>
            <option value="Transport">Transport</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default Searchbar;
