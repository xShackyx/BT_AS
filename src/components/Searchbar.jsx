function Searchbar({
  searchQuery,
  setSearchQuery,
  filterQuery,
  setFilterQuery,
}) {
  return (
    <form className="p-1 flex flex-col border border-black rounded-md">
      <div className="flex rounded ">
        <input
          className="border border-black flex-auto"
          type="text"
          placeholder="Search for an unit"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="flex-auto border"
          value={filterQuery.rules}
          // onChange={() => setFilterQuery(value)}
          name="rules"
        >
          <option value="allRules">All</option>
          <option value="introRules">Introductory</option>
          <option value="standardRules">Standard</option>
          <option value="advancedRules">Advanced</option>
        </select>
        <select className="flex-auto rounded" name="tech">
          <option value="allTechs">All</option>
          <option value="isTech">Inner Sphere</option>
          <option value="clanTech">Clan</option>
        </select>
      </div>
      <div className="flex rounded">
        <select className="flex-auto rounded" name="era">
          <option value="allEras">All</option>
          <option value="slEra">Star League</option>
          <option value="eswEra">Early Succession Wars</option>
          <option value="lswlEra">Late Succession Wars / LosTech</option>
          <option value="lswrEra">Late Succession Wars / Reinassance</option>
          <option value="ciEra">Clan Invasion</option>
          <option value="cwEra">Civil War</option>
          <option value="jEra">Jihad</option>
          <option value="erEra">Early Republic</option>
          <option value="lrEra">Late Republic</option>
          <option value="daEra">Dark Ages</option>
          <option value="icEra">ilClan</option>
        </select>
        <select className="flex-auto rounded" name="type">
          <option value="allTypes">All</option>
          <option value="battlemechType">BattleMech</option>
          <option value="combatVehicleType">Combat Vehicle</option>
          <option value="aerospaceType">Aerospace</option>
          <option value="infantryType">Infantry</option>
          <option value="industrialmechType">IndustrialMech</option>
          <option value="protomechType">ProtoMech</option>
          <option value="supportVehicleType">Support Vehicle</option>
        </select>
        <select className="flex-auto rounded" name="role">
          <option value="allRoles">All</option>
          <option className="font-bold uppercase" disabled>
            Ground Unit
          </option>
          <option value="ambusherRole">-Ambusher</option>
          <option value="brawlerRole">-Brawler</option>
          <option value="juggernautRole">-Juggernaut</option>
          <option value="missileBoatRole">-Missile Boat</option>
          <option value="scoutRole">-Scout</option>
          <option value="skirmisherRole">-Skirmisher</option>
          <option value="sniperRole">-Sniper</option>
          <option value="strikerRole">-Striker</option>
          <option className="font-bold uppercase" disabled>
            Aerospace
          </option>
          <option value="attackRole">-Attack</option>
          <option value="dogfigherRole">-Dogfighter</option>
          <option value="fastDogfighterRole">-Fast Dogfigher</option>
          <option value="fireSupportRole">-Fire Support</option>
          <option value="interceptorRole">-Interceptor</option>
          <option value="transportRole">-Transport</option>
        </select>
      </div>
    </form>
  );
}

export default Searchbar;
