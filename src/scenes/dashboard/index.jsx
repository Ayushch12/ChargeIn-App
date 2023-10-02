import {
  PersonAdd
} from "@mui/icons-material";
import {
  Box,
  useMediaQuery,
  useTheme
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import StatBox from "components/StatBox";
import { BsFillPeopleFill, BsLightningCharge } from 'react-icons/bs';
import { FaFolderOpen } from 'react-icons/fa';
import { IoPieChartSharp } from 'react-icons/io5';
import { MdPermIdentity } from 'react-icons/md';
import { useGetDashboardQuery } from "state/api";







  const Dashboard = () => {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    const { data } = useGetDashboardQuery();

    return (
      <Box m="1.5rem 2.5rem">
        <FlexBetween>
          <BsLightningCharge style={{ marginRight: '-41rem' }} />
          <Header title="Tableau de bord" subtitle="" />
          <Box>
            {/* ... other content */}
          </Box>
        </FlexBetween>
  {/* <StatBox
    style={{
      width: '314px',
      height: '350px',
      background: 'linear-gradient(0deg, #4BD2CA, #4BD2CA), linear-gradient(0deg, #FFFFFF, #FFFFFF)'
    }}
    title="Objectifs de Charge-in "
    value={data && data.totalCustomers}

  /> */}

  <StatBox
    style={{
      width: '314px',
      height: '350px',
      background: 'linear-gradient(0deg, #4BD2CA, #4BD2CA), linear-gradient(0deg, #FFFFFF, #FFFFFF)'
    }}
    title={
      <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span>Objectifs de Charge-in</span>



        <button style={{
            width: '128px',
            height: '34px',
            borderRadius: '8px',
            background: 'linear-gradient(122.62deg, #8BDFDA -0.8%, #369C96 100.79%)',
            color: 'white' ,
            border:'none'
        }}>
            <span style={{ width: '104px', height: '22px' }}>
                1er trimestre
            </span>
        </button>

        <button style={{
            width: '128px',
            height: '34px',
            borderRadius: '8px',
            background: '#0C354F',
            border:'none'
        }}>
            <span style={{ width: '104px', height: '22px' }}>
                2éme trimestre
            </span>
        </button>

        <button style={{
            width: '128px',
            height: '34px',
            borderRadius: '8px',
            background: '#0C354F',
            border:'none'
        }}>
            <span style={{ width: '104px', height: '22px' }}>
                3éme trimestre
            </span>
        </button>



        <button style={{
            width: '128px',
            height: '34px',
            borderRadius: '8px',
            background: '#0C354F',
            border:'none'
        }}>

            <span style={{ width: '104px', height: '22px' }}>
                année 2023
            </span>

        </button>
      </div>

      <div style={{ display: 'flex', gap: '9rem', marginTop:'2rem' }}>
      <div>50 partenaires <br /> Encours</div>
      <div>100 installateurs <br />Encours</div>
      <div>200 installations <br />Encours</div>
  </div>
      </div>


    }



  />

  {/* <div style={{ display: 'flex', gap: '9rem' }}>
      <div>50 partenaires <br /> Encours</div>
      <div>100 installateurs <br />Encours</div>
      <div>200 installations <br />Encours</div>
  </div> */}



  <h1>Statistiques de Charge-in </h1>

        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(8, 1fr)" // Set the grid to have 8 columns
          gridAutoRows="160px"
          gap="20px"
          sx={{
            "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 8" },
          }}
        >

  <StatBox
    title={
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>
        <MdPermIdentity
         style={{
           color: ' #369C96',
          // background: 'linear-gradient(122.62deg, #8BDFDA -0.8%, #369C96 100.79%)',
          // fontSize: "50px",
          marginBottom: "8px",
          marginRight: "7rem",
          height: "36px",
          width: "36px",

        }}

        />
      </div>

        <div style={{ marginRight: "2rem" }}>
          Installateurs   <br /> partenaires inscrits
        </div>
      </div>
    }
    value={data && data.thisMonthStats.totalSales}
    increase="75"
    description="2%"
    sx={{
      gridColumn: "span 2",
      textAlign: "center",
      width: "247px",        // Set the width to 247px
      height: "253px",       // Set the height to 253px
      borderRadius: "16px",  // Set the border radius to 16px
    }}
  />

  <StatBox
    title={
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <IoPieChartSharp
          style={{
            color: ' #369C96',
            marginBottom: "8px",
            marginRight: "7rem",
            height: "36px",
            width:"36px"
          }}
        />
        <div style={{ marginRight: "2rem" }}>
          Abonnements   <br /> en cours
        </div>
        <div style={{ frontsize: "8px", marginRight: "2rem"  }}>
           Nombre d'abonnements   <br /> 22
        </div>
      </div>
    }
    value={data && data.thisMonthStats.totalSales}
    increase="261$ HT"
    description="= 2%"
    style={{
      color: theme.palette.secondary[300],
      marginBottom: "8px",
      marginRight: "7rem",
      height: "36px",
      width:"36px"
    }}
  />

  <StatBox
    title={
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <FaFolderOpen
          style={{
            color: ' #369C96',
            marginBottom: "8px",
            marginRight: "7rem",
            height: "36px",
            width:"36px"
          }}
        />
        <div style={{ marginRight: "2rem" }}>
          Devis réalisés
        </div>
      </div>
    }
    value={data && data.thisMonthStats.totalSales}
    increase="105" description=" 2%"

    style={{
      color: ' #369C96',
      marginBottom: "8px",
      marginRight: "7rem",
      height: "36px",
      width:"36px"
    }}
  />

  <StatBox
    title={
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <IoPieChartSharp
         style={{
          color: ' #369C96',
          marginBottom: "8px",
          marginRight: "7rem",
          height: "36px",
          width:"36px"
        }}
        />
        <div style={{ marginRight: "2rem" }}>
          Points de charge
        </div>
      </div>
    }
    value={data && data.thisMonthStats.totalSales}
    increase="450"  description="18%"

    style={{
      color: ' #369C96',
      marginBottom: "8px",
      marginRight: "7rem",
      height: "36px",
      width:"36px"
    }}
  />

  <StatBox
    title={
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <BsFillPeopleFill
         style={{
          color: ' #369C96',
          marginBottom: "8px",
          marginRight: "7rem",
          height: "36px",
          width:"36px"
        }}
        />
        <div style={{ marginRight: "2rem" }}>
          Points de charge   <br /> supervisés
        </div>
      </div>
    }
    value={data && data.thisMonthStats.totalSales}
    increase="432%"
    description="18%"
    style={{
      color: ' #369C96',
      marginBottom: "8px",
      marginRight: "7rem",
      height: "36px",
      width:"36px"
    }}
  />
  <StatBox
    title={
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <PersonAdd
          style={{
            color: ' #369C96',
            marginBottom: "8px",
            marginRight: "7rem",
            height: "36px",
            width:"36px"
          }}
        />
        <div style={{ marginRight: "2rem" }}>
          Taux de conversion
        </div>
      </div>
    }
    value={data && data.thisMonthStats.totalSales}
    increase="78"
    description="2%"
    style={{
      color: ' #369C96',
      marginBottom: "8px",
      marginRight: "7rem",
      height: "36px",
      width:"36px"
    }}
  />
  <StatBox
    title={
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <PersonAdd
         style={{
          color: ' #369C96',
          marginBottom: "8px",
          marginRight: "7rem",
          height: "36px",
          width:"36px"
        }}
        />
        <div style={{ marginRight: "2rem" }}>
          Chiffre d'affaires
        </div>
      </div>
    }
    value={data && data.thisMonthStats.totalSales}
    increase="26100"
    description="6%"
    style={{
      color: ' #369C96',
      marginBottom: "8px",
      marginRight: "7rem",
      height: "36px",
      width:"36px"
    }}
  />


        </Box>
        <h1>Actions rapides</h1>



  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <button style={{
          width: '340.67px',
          height: '45px',
          padding: '10px 16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#304399',
          border: 'none',
          color: 'white',
          marginRight: '16px' // added margin to separate the buttons
      }}>
          <MdPermIdentity style={{
              marginRight: '8px',
              width: '24px',
              height: '24px',
              padding: '2.25px 3px 2.25px 3px'
          }} />
          Ajouter un installateur
      </button>

      <button style={{
          width: '340.67px',
          height: '45px',
          padding: '10px 16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#369C96',
          border: 'none',
          color: 'white',
          marginRight: '16px' // added margin to separate the buttons
      }}>
          <MdPermIdentity style={{
              marginRight: '8px',
              width: '24px',
              height: '24px',
              padding: '2.25px 3px 2.25px 3px'
          }} />
          Ajouter une étude
      </button>

      <button style={{
          width: '340.67px',
          height: '45px',
          padding: '10px 16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#304399',
          border: 'none',
          color: 'white'
      }}>
          <MdPermIdentity style={{
              marginRight: '8px',
              width: '24px',
              height: '24px',
              padding: '2.25px 3px 2.25px 3px'
          }} />
          Ajouter une borne
      </button>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <button style={{
          width: '340.67px',
          height: '45px',
          padding: '10px 16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#369C96',
          border: 'none',
          color: 'white',
          marginRight: '16px' // added margin to separate the buttons
      }}>
          <MdPermIdentity style={{
              marginRight: '8px',
              width: '24px',
              height: '24px',
              padding: '2.25px 3px 2.25px 3px'
          }} />
          Ajouter un véhicule
      </button>

      <button style={{
          width: '340.67px',
          height: '45px',
          padding: '10px 16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#304399',
          border: 'none',
          color: 'white',
          marginRight: '16px' // added margin to separate the buttons
      }}>
          <MdPermIdentity style={{
              marginRight: '8px',
              width: '24px',
              height: '24px',
              padding: '2.25px 3px 2.25px 3px'
          }} />
          Ajouter un accessoires
      </button>

      <button style={{
          width: '340.67px',
          height: '45px',
          padding: '10px 16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#369C96',
          border: 'none',
          color: 'white'
      }}>
          <MdPermIdentity style={{
              marginRight: '8px',
              width: '24px',
              height: '24px',
              padding: '2.25px 3px 2.25px 3px'
          }} />
          Ajouter un obectif
      </button>
  </div>



      </Box>


    );
  };

  export default Dashboard;