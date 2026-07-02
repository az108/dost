package de.silvamed.drdost.ui

import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.HealthAndSafety
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.MedicalServices
import androidx.compose.material.icons.filled.PhotoLibrary
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.style.TextOverflow
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import de.silvamed.drdost.content.SiteContent

private data class Dest(val route: String, val label: String, val icon: ImageVector)

private val destinations = listOf(
    Dest("start", "Start", Icons.Filled.Home),
    Dest("behandlungen", "Behandlungen", Icons.Filled.MedicalServices),
    Dest("fachbereiche", "Fachbereiche", Icons.Filled.HealthAndSafety),
    Dest("galerie", "Galerie", Icons.Filled.PhotoLibrary),
    Dest("info", "Info", Icons.Filled.Info),
)

@Composable
fun DrDostApp(content: SiteContent) {
    val navController = rememberNavController()
    Scaffold(bottomBar = {
        val backStack by navController.currentBackStackEntryAsState()
        val currentRoute = backStack?.destination?.route
        NavigationBar {
            destinations.forEach { dest ->
                NavigationBarItem(
                    selected = currentRoute?.startsWith(dest.route) == true,
                    onClick = {
                        navController.navigate(dest.route) {
                            popUpTo(navController.graph.findStartDestination().id) {
                                saveState = true
                            }
                            launchSingleTop = true
                            restoreState = true
                        }
                    },
                    icon = { Icon(dest.icon, contentDescription = dest.label) },
                    label = { Text(dest.label, maxLines = 1, overflow = TextOverflow.Ellipsis) },
                )
            }
        }
    }) { padding ->
        NavHost(
            navController,
            startDestination = "start",
            modifier = Modifier.padding(padding),
        ) {
            composable("start") { StartScreen(content) }
            composable("behandlungen") {
                TopicListScreen("Behandlungen", content.behandlungen) {
                    navController.navigate("behandlungen/${it.slug}")
                }
            }
            composable("behandlungen/{slug}") { entry ->
                val slug = entry.arguments?.getString("slug")
                TopicDetailScreen(content.behandlungen.firstOrNull { it.slug == slug }) {
                    navController.popBackStack()
                }
            }
            composable("fachbereiche") {
                TopicListScreen("Fachbereiche", content.fachbereiche) {
                    navController.navigate("fachbereiche/${it.slug}")
                }
            }
            composable("fachbereiche/{slug}") { entry ->
                val slug = entry.arguments?.getString("slug")
                TopicDetailScreen(content.fachbereiche.firstOrNull { it.slug == slug }) {
                    navController.popBackStack()
                }
            }
            composable("galerie") {
                GalerieScreen(content.galerie) { index ->
                    navController.navigate("galerie/$index")
                }
            }
            composable("galerie/{index}") { entry ->
                val index = entry.arguments?.getString("index")?.toIntOrNull() ?: 0
                PhotoViewerScreen(content.galerie, index) { navController.popBackStack() }
            }
            composable("info") { InfoScreen(content) { route -> navController.navigate(route) } }
            composable("info/impressum") {
                LegalScreen("Impressum", content.legal.impressum) { navController.popBackStack() }
            }
            composable("info/datenschutz") {
                LegalScreen("Datenschutz", content.legal.datenschutz) { navController.popBackStack() }
            }
        }
    }
}
