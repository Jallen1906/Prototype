using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PrototypeDndWebAPI.Models
{
    public class CharacterData
    {

        public CharacterInfo  CharInfo;
        public CharacterExp   CharExp;
        public CharacterStats CharStats;

        public CharacterData()
        {
            CharInfo = new CharacterInfo();
            CharExp = new CharacterExp();
            CharStats = new CharacterStats();
        }
    }


    public class CharacterInfo
    {

        public List<string> GetCharacterInfo()
        {
            List<string> charstats = new List<string> ( new string[] {
                CharName, CharClass, CharRace,
                CharAlignment, CharLanguages } );
            return charstats;
        }

        public void SetCharacterInfo(string char_name, string char_class, string char_race,
                string char_alignment, string char_languages)
        {
            CharName = char_name;
            CharClass = char_class;
            CharRace = char_race;
            CharAlignment = char_alignment;
            CharLanguages = char_languages;
        }

        private string CharName;
        private string CharClass;
        private string CharRace;
        private string CharAlignment;
        private string CharLanguages;



    }


    public class CharacterExp
    {
        public List<string> GetCharacterExp()
        {
            List<string> charexp = new List<string>(new string[] {
                CharXP, CharLevel, CharInitiative,
                CharSpeed, CharInspiration, CharProficiency });
            return charexp;
        }

        private string CharXP;
        private string CharLevel;
        private string CharInitiative;
        private string CharSpeed;
        private string CharInspiration;
        private string CharProficiency;
    }

    public class CharacterStats
    {
        public List<string> GetCharacterInfo()
        {
            List<string> charstats = new List<string>(new string[] {
                CharHealth, CharArmor, CharHitDie,
                CharSuccesses, CharFailures, CharExhaustion });
            return charstats;
        }
        private string CharHealth;
        private string CharArmor;
        private string CharHitDie;
        private string CharSuccesses;
        private string CharFailures;
        private string CharExhaustion;
    }
}