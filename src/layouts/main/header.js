import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { bgBlur } from 'src/theme/css';
import { RouterLink } from 'src/routes/components';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
import { useSettingsContext } from 'src/components/settings';

import { HEADER } from '../config-layout';
import Searchbar from '../common/searchbar';
import HeaderShadow from '../common/header-shadow';
import { careerRoutes } from '../../routes/sections/career';
import BaseOptions from '../../components/settings/drawer/base-options';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  const settings = useSettingsContext();

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ lineHeight: 0, position: 'relative' }}>
            <Link
              component={RouterLink}
              href="/"
              sx={{ textDecoration: 'none !important' }}
              rel="noopener"
            >
              <Stack direction="row">
                <img src="/assets/logo/logo.png" alt="logo" width="100px" />
                <Typography
                  variant="h3"
                  sx={{
                    display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' },
                    my: 'auto',
                    textDecoration: 'none !important',
                  }}
                  color="primary.main"
                >
                  J&P Globe Trade
                </Typography>
              </Stack>
            </Link>
            {/* <Link href="/" target="_blank" rel="noopener">
              <Label
                color="info"
                sx={{
                  ml: 0.5,
                  px: 0.5,
                  top: -14,
                  left: 60,
                  height: 20,
                  fontSize: 11,
                  cursor: 'pointer',
                  position: 'absolute',
                }}
              >
                SP. Z O.O
              </Label>
            </Link> */}
          </Box>

          {mdUp && <NavDesktop data={careerRoutes[0].children} />}

          <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
            <Stack spacing={1} direction="row" alignItems="center">
              <Searchbar />
              <BaseOptions
                selected={settings.themeMode === 'dark'}
                onClick={() =>
                  settings.onUpdate('themeMode', settings.themeMode === 'dark' ? 'light' : 'dark')
                }
                icons={['carbon:asleep', 'carbon:asleep-filled']}
              />
              {/* <SettingsButton /> */}
            </Stack>
          </Stack>

          {!mdUp && <NavMobile data={careerRoutes[0].children} />}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
