package de.silvamed.drdost

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import de.silvamed.drdost.content.ContentLoader
import de.silvamed.drdost.ui.DrDostApp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Bundled asset; failure to load is a programming error. Fail fast in
        // debug (runCatching keeps release at a minimal error screen instead).
        val content = runCatching {
            ContentLoader.parse(assets.open("content.json").bufferedReader().use { it.readText() })
        }.onFailure { if (BuildConfig.DEBUG) throw it }.getOrNull()
        setContent {
            MaterialTheme(colorScheme = lightColorScheme()) {
                if (content == null) ErrorScreen() else DrDostApp(content)
            }
        }
    }
}

@Composable
private fun ErrorScreen() {
    Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Text("Inhalte konnten nicht geladen werden")
    }
}
